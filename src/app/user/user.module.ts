import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';
import {UserRouting} from './user.routing';



@NgModule({
  declarations: [UserComponent, ListUserComponent, EditUserComponent],
  imports: [
    UserRouting,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class UserModule { }
