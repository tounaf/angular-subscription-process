import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListTypeProduitComponent } from './list-type-produit/list-type-produit.component';
import {TypeProduitRouting} from './type-produit.routing';
import { EditTypeProduitComponent } from './edit-type-produit/edit-type-produit.component';
import { TypeProduitComponent } from './type-produit.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from '../not-found/not-found.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [TypeProduitComponent, ListTypeProduitComponent, EditTypeProduitComponent],
  imports: [
    TypeProduitRouting,
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class TypeProduitModule { }
