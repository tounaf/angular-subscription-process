import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [ListUserComponent, EditUserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
