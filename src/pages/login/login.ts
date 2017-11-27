import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../../pages/register/register';
import {HomePage} from '../../pages/home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public username:string;
  public password:string;
  public validForm:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
   this.validForm = true;
  }
 
  register(){
  	this.navCtrl.push(RegisterPage);
  }

  // Button event to handle the LoginUserFunctionality 
  loginUser(){
    if(this.username!=null && this.password!=null){
     this.navCtrl.setRoot(HomePage);
    }else{
      this.validForm = false;
    }
  }

}
