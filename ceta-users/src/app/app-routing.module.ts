import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './users/component/user-add/user-add.component';
import { UserEditComponent } from './users/component/user-edit/user-edit.component';
import { UsersComponent } from './users/component/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'users/:userId',
    component: UserEditComponent,
  },
  {
    path: 'add',
    component: UserAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
