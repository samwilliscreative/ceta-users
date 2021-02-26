import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../service/user-model.interface';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  addUser(user: User): void {
    this.usersService.addUser(user).subscribe((success) => {
      if (success) {
        // Would add snackbar/toast component to show a success message given more time
        this.router.navigate(['/']);
      }
    });
  }
}
