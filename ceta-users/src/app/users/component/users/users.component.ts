import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../service/user-model.interface';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.usersService.users$;
  }

}
