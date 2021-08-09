import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormuleProduitComponent } from './list-formule-produit/list-formule-produit.component';
import { EditFormuleProduitComponent } from './edit-formule-produit/edit-formule-produit.component';



@NgModule({
  declarations: [ListFormuleProduitComponent, EditFormuleProduitComponent],
  imports: [
    CommonModule
  ]
})
export class FormuleProduitModule { }
