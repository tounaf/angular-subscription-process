import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntiteComponent } from './list-entite/list-entite.component';
import { EditEntiteComponent } from './edit-entite/edit-entite.component';



@NgModule({
  declarations: [ListEntiteComponent, EditEntiteComponent],
  imports: [
    CommonModule
  ]
})
export class EntiteModule { }
