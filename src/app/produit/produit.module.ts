import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { ProduitComponent } from './produit.component';



@NgModule({
  declarations: [ListProduitComponent, EditProduitComponent, ProduitComponent],
  imports: [
    CommonModule
  ]
})
export class ProduitModule { }
