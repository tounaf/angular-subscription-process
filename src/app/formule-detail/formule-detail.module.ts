import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormuleDetailComponent } from './list-formule-detail/list-formule-detail.component';
import { EditFormuleDetailComponent } from './edit-formule-detail/edit-formule-detail.component';



@NgModule({
  declarations: [ListFormuleDetailComponent, EditFormuleDetailComponent],
  imports: [
    CommonModule
  ]
})
export class FormuleDetailModule { }
