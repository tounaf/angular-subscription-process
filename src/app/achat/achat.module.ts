import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAchatComponent } from './list-achat/list-achat.component';
import { DetailAchatComponent } from './detail-achat/detail-achat.component';



@NgModule({
  declarations: [ListAchatComponent, DetailAchatComponent],
  imports: [
    CommonModule
  ]
})
export class AchatModule { }
