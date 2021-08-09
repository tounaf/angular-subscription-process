import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIngredientComponent } from './list-ingredient/list-ingredient.component';
import { EditIngredientComponent } from './edit-ingredient/edit-ingredient.component';



@NgModule({
  declarations: [ListIngredientComponent, EditIngredientComponent],
  imports: [
    CommonModule
  ]
})
export class IngredientModule { }
