import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAchatDetailComponent } from './list-achat-detail/list-achat-detail.component';
import { EditAchatDetailComponent } from './edit-achat-detail/edit-achat-detail.component';



@NgModule({
  declarations: [ListAchatDetailComponent, EditAchatDetailComponent],
  imports: [
    CommonModule
  ]
})
export class AchatDetailModule { }
