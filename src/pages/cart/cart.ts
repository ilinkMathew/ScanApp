import { Component,OnInit,OnChanges} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartProvider} from '../../providers/cart';
import {AlertController} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage implements OnInit,OnChanges  {
  public cartInfo:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public cartProvider:CartProvider,
              private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  ngOnInit(){

    
  this.cartProvider.getCartData().subscribe((val)=>{
      this.cartInfo = val;
    });
  }
  ngOnChanges(){
   this.cartProvider.getCartData().subscribe((val)=>{
      this.cartInfo = val;
    }); 
  } 
 
 // Invoke the cart Service to create the Cart Items
  clearCart(){
     
     this.cartProvider.clearCart();
       
  }

  // button event which initiate the check Out process
  checkOut(){
    let successAlert = this.alertCtrl.create({
      title:'Check Out Successfull',
      message:'Thank you for Shopping!..',
      buttons:[{
        text:'OK',
        handler:()=>{
          this.navCtrl.pop();
        }

      }]
    });
      let failAlert = this.alertCtrl.create({
      title:'Your Cart is still Empty',
      message:'Unable to checkOut..',
      buttons:['OK']
    });
  
  if(this.cartInfo.length){
    successAlert.present();
    this.clearCart();  
  }else{
    failAlert.present();
  }
  
  





  }



}
