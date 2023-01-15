import { NgModule } from '@angular/core';
import {ListTypeProduitComponent} from './list-type-produit/list-type-produit.component';
import {RouterModule, Routes} from '@angular/router';
import {Route} from '../config/routes';
import {EditTypeProduitComponent} from './edit-type-produit/edit-type-produit.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {TypeProduitComponent} from './type-produit.component';
import {NotFoundModule} from '../not-found/not-found.module';

const routes: Routes = [
  {
    path: 'type-produit',
    component: TypeProduitComponent,
    children:
    [
      {
        path: Route.list,
        component: ListTypeProduitComponent
      },
      {
        path: Route.edit + '/:id',
        component: EditTypeProduitComponent
      },
      
      {
        path: Route.edit,
        component: EditTypeProduitComponent
      },
      {path: '**', redirectTo: Route.not_found},
      {path: Route.not_found, component: NotFoundComponent, data: {breadcrumb: 'Page introuvable'}},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    NotFoundModule
  ],
  exports: [RouterModule]
})
export class TypeProduitRouting { }
