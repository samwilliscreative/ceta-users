import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../service/user-model.interface';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;

  userFields = new FormGroup({
    name: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
  });

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.userFields.get('name').setValue(this.user.name);
    this.userFields.get('username').setValue(this.user.username);
    this.userFields.get('email').setValue(this.user.email);
  }

  saveForm() {
    const newUserData = this.user;
    newUserData.name = this.userFields.get('name').value;
    newUserData.username = this.userFields.get('username').value;
    newUserData.email = this.userFields.get('email').value;
    this.usersService.updateUser(this.user)
  }

}
