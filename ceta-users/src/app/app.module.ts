import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './users/component/user-add/user-add.component';
import { UserEditComponent } from './users/component/user-edit/user-edit.component';
import { UserFormComponent } from './users/component/user-form/user-form.component';
import { UsersComponent } from './users/component/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserEditComponent,
    UserFormComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
