import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTypeProduitComponent } from './list-type-produit/list-type-produit.component';
import {TypeProduitRouting} from './type-produit.routing';



@NgModule({
  declarations: [ListTypeProduitComponent],
  imports: [
    TypeProduitRouting,
    CommonModule
  ]
})
export class TypeProduitModule { }
