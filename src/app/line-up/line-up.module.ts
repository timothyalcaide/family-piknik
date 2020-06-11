import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineUpPageRoutingModule } from './line-up-routing.module';

import { LineUpPage } from './line-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineUpPageRoutingModule
  ],
  declarations: [LineUpPage]
})
export class LineUpPageModule {}
