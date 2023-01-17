import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
    `
      td,
      th {
        text-align: center !important;
        vertical-align: middle !important;
      }

      .mat-sort-header-container {
        justify-content: center !important;
      }
    `,
  ],
})
export class UsersComponent implements AfterViewInit {
  users: User[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'lastname',
    'email',
    'birth',
    'position',
    'role',
    'actions',
  ];

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private usersService: UsersService,
    private snackService: SnackBarService
  ) {}

  ngAfterViewInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe((resp) => {
      this.ngAfterViewInit();
      this.snackService.showSnack('User Deleted Succesfully');
    });
  }
}
