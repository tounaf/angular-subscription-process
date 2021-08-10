import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntiteComponent } from './list-entite/list-entite.component';
import { EditEntiteComponent } from './edit-entite/edit-entite.component';
import { EntiteComponent } from './entite.component';



@NgModule({
  declarations: [ListEntiteComponent, EditEntiteComponent, EntiteComponent],
  imports: [
    CommonModule
  ]
})
export class EntiteModule { }
