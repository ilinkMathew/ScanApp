import { Injectable } from '@angular/core';

import {Observable,BehaviorSubject} from 'rxjs'
@Injectable()
export class CartProvider {
  public cartData;
  public myCart=[];
  constructor() {
    console.log('DataService iniatied');
   this.cartData = new BehaviorSubject(this.myCart);
  }
  getCartData():Observable<any>{
  	
  	return this.cartData;
  	
  }
  // Adds the data to the MyCart array and emits a next Event to all its subscribers
  addToCart(data){
  this.myCart.push(data);
  this.cartData.next(this.myCart);
  }
   // removes all the data from the  MyCart array and emits a next Event to all its subscribers
 clearCart(){
  this.myCart.length = 0; 
  this.cartData.next(this.myCart);
  console.log(this.myCart);

 }

}
