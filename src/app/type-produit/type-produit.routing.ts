import { NgModule } from '@angular/core';
import {ListTypeProduitComponent} from './list-type-produit/list-type-produit.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: ListTypeProduitComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TypeProduitRouting { }
