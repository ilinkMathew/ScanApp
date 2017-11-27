import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login' 
import {HomePage} from '../../pages/home/home';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public email:string;
  public username:string;
  public password:string;
  public validForm:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
   this.validForm = true;
  }
 
login(){
this.navCtrl.pop();
}
// Button event to handle the Register User Functionality 
registerUser(){
	if(this.username!=null && this.password!=null && this.email!=null){
	  this.navCtrl.setRoot(HomePage);	
      
	}else{
		this.validForm = false;
	}
}


}
