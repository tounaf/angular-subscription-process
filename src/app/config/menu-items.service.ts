import { Injectable } from '@angular/core';
import {Route} from './routes';

export interface Menu {
  path: string[];
  icon: string;
  label: string;
  child: any;
}

export const MenuItems: Menu[] = [
  {
    path: ['#'],
    icon: 'settings',
    label: 'Setting',
    child: [
      {
        path: ['/', Route.type_produit, Route.list],
        label: 'Type produit',
        icon: '',
      },
      {
        path: ['/', Route.user, Route.list],
        label: 'Utilisateur',
        icon: '',
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})

export class MenuItemsService {

  getMenus(): Menu[] {
    return MenuItems;
  }
}
