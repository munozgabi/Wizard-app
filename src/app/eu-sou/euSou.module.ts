import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EuSouPage } from './euSou.page';

import { EuSouPageRoutingModule } from './euSou-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EuSouPageRoutingModule
  ],
  declarations: [EuSouPage]
})
export class EuSouPageModule {}
