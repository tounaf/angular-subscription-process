import { NgModule } from '@angular/core';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {Route} from '../config/routes';
import {NotFoundModule} from '../not-found/not-found.module';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children:
      [
        {
          path: Route.list,
          component: ListUserComponent
        },
        {
          path: Route.edit + '/:id',
          component: EditUserComponent
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

export class UserRouting { }
