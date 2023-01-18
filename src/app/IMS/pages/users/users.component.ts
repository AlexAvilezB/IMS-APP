import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

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
  user!: User;

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
    private snackService: SnackBarService,
    private dialog: MatDialog
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
    this.usersService.getUserById(id).subscribe( resp => {
      this.user = resp;
      const dialog = this.dialog.open(ConfirmComponent, {
        width: '250px',
        data: this.user.username,
      });

      dialog.afterClosed().subscribe(
        res => {
          if( res == true ) {
            this.usersService.deleteUser(id).subscribe( data => {
              this.snackService.showSnack(
                `${this.user.username} deleted succesfully`
              );
              this.ngAfterViewInit();
            })
          }
        }
      )
    });
  }
}
