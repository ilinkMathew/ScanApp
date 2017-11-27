import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannedProductPage } from './scanned-product';

@NgModule({
  declarations: [
    ScannedProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannedProductPage),
  ],
})
export class ScannedProductPageModule {}
