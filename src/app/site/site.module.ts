import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSiteComponent } from './list-site/list-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';



@NgModule({
  declarations: [ListSiteComponent, EditSiteComponent],
  imports: [
    CommonModule
  ]
})
export class SiteModule { }
