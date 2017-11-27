import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {BarcodeScanner} from '@ionic-native/barcode-scanner'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ScannedProductPage} from '../pages/scanned-product/scanned-product';
import {CartPage} from '../pages/cart/cart';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register'
import { CartProvider } from '../providers/cart';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScannedProductPage,
     CartPage,
     LoginPage,
     RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScannedProductPage,
    CartPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartProvider
  ]
})
export class AppModule {}
