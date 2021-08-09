import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntiteTypeComponent } from './list-entite-type/list-entite-type.component';
import { EditEntiteTypeComponent } from './edit-entite-type/edit-entite-type.component';



@NgModule({
  declarations: [ListEntiteTypeComponent, EditEntiteTypeComponent],
  imports: [
    CommonModule
  ]
})
export class EntiteTypeModule { }
