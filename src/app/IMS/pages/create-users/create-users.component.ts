import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs';

import { Role, User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styles: [],
})
export class CreateUsersComponent implements OnInit {
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  roles: Role[] = [];
  user: User = {
    username: '',
    lastname: '',
    email: '',
    password: '',
    birthday: new Date(),
    position: '',
    role: {
      role_name: '',
    },
  };

  usersForm: FormGroup = this.fb.group({
    username: [
      this.user.username,
      [Validators.required, Validators.minLength(3)],
    ],
    lastname: [
      this.user.lastname,
      [Validators.required, Validators.minLength(3)],
    ],
    email: [
      this.user.email,
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
    password: [this.user.password, [Validators.required, Validators.min(5)]],
    birthday: [this.user.birthday, [Validators.required]],
    position: [this.user.position, [Validators.required, Validators.min(3)]],
    role: [this.user.role.role_name, [Validators.required]],
  });

  constructor(
    private usersService: UsersService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.rolesService.getRoles().subscribe((resp) => {
      this.roles = resp;
    });
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.usersService.getUserById(id)))
        .subscribe((user) => {
          this.user = user;
          this.usersForm.patchValue(this.user);
        });
    }
  }

  validateFields(field: string) {
    return (
      this.usersForm.controls[`${field}`].errors &&
      this.usersForm.controls[`${field}`].touched
    );
  }

  saveUser() {
    if (this.usersForm.invalid) {
      this.usersForm.markAsTouched();
      return;
    } else {
      this.usersForm.value.role = {
        role_name: this.usersForm.value.role,
      };
      if (this.user.id) {
        this.usersService
          .editUser(this.usersForm.value, this.user.id)
          .subscribe((resp) => {
            alert('User Edited Succesfully');
            this.router.navigate(['/users']);
          });
      } else {
        this.usersService.createUser(this.usersForm.value).subscribe((resp) => {
          alert('User created succesfully');
          this.router.navigate(['/users']);
        });
      }
    }
  }
}
