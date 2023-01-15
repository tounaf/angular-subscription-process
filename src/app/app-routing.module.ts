import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TypeProduitComponent} from './type-produit/type-produit.component';
import {Route} from './config/routes';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () => import('./type-produit/type-produit.module').then(mod => mod.TypeProduitModule),
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
  },
  /*
  {
    path: '',
    loadChildren: () => import('./produit/produit.module').then(mod => mod.ProduitModule),
  },
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(mod => mod.SiteModule),
  },
  {
    path: '',
    loadChildren: () => import('./entite/entite.module').then(mod => mod.EntiteModule),
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
