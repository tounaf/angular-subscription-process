import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSiteComponent } from './list-site/list-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { SiteComponent } from './site.component';



@NgModule({
  declarations: [ListSiteComponent, EditSiteComponent, SiteComponent],
  imports: [
    CommonModule
  ]
})
export class SiteModule { }
