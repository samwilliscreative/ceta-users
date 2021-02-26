import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../service/user-model.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Output() saveEvent: EventEmitter<User> = new EventEmitter<User>();

  fieldkeys: string[] = ['name', 'username', 'email'];

  // Would add proper field validation messages etc inline in the template too
  userFields = new FormGroup({
    name: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
  });

  constructor() {}

  ngOnInit(): void {
    if (this.user) {
      this.fieldkeys.forEach((key) => {
        this.setFieldValue(key);
      });
    }
  }

  getFieldValue(key: string): any {
    return this.userFields.get('name').value;
  }

  saveForm() {
    const newUserData = this.user ? this.user : ({} as User);

    this.fieldkeys.forEach((key) => {
      newUserData[key] = this.getFieldValue(key);
    });

    this.saveEvent.emit(newUserData);
  }

  setFieldValue(key: string): void {
    this.userFields.get(key).setValue(this.user[key]);
  }
}
