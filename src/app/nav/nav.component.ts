import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Menu, MenuItemsService} from '../config/menu-items.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  menusItems: Menu[];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private menus: MenuItemsService
  ) {}

  ngOnInit() {
   this.menusItems = this.menus.getMenus();
   console.log(this.menusItems);
  }
}
