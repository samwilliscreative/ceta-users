import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../service/user-model.interface';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userId: number;
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.userId = parseInt(this.route.snapshot.paramMap.get('userId'));
    this.getUser();
  }

  getUser() {
    this.user$ = this.usersService.getUser(this.userId);
  }

}
