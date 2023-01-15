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


import {  ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatOptionModule,MatIconModule,
    MatTabsModule,
    MatCheckboxModule,
   MatSelectModule, MatGridListModule, MatCardModule } from '@angular/material';





@NgModule({
  declarations: [TypeProduitComponent, ListTypeProduitComponent, EditTypeProduitComponent],
  imports: [
    TypeProduitRouting,
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatCheckboxModule,

  ]
})
export class TypeProduitModule { }
