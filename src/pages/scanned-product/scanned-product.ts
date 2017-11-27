import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartProvider} from '../../providers/cart';
@IonicPage()
@Component({
  selector: 'page-scanned-product',
  templateUrl: 'scanned-product.html',
})
export class ScannedProductPage {
 public title:string;
 public price:number;
 public image:string;
 public description:string;
 public ratings:number;
 public reviews:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cartProvider:CartProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannedProductPage');
    this.title =this.navParams.get('product').productTitle;
    this.price =this.navParams.get('product').productPrice;
    this.image = this.navParams.get('product').productImage;
    this.description = this.navParams.get('product').productDescription;
    this.ratings = this.navParams.get('product').productRatings;
    this.reviews = this.navParams.get('product').productReviews;
    
  }

  // Method to add the data to the cart 
  addToCart(){
  let cartData = {
        'productTitle':this.title,
        'productPrice':this.price,
        'productImage':this.image,
        'productDescription':this.description,
        'productRating':this.ratings,
        'productReviews':this.reviews
  }
  
  this.cartProvider.addToCart(cartData);
  this.navCtrl.pop();
  }

  

}
