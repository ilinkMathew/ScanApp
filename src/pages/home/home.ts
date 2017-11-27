import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {Product} from '../../model/product';
import {ScannedProductPage} from '../../pages/scanned-product/scanned-product';
import {CartPage} from '../../pages/cart/cart';
import { AlertController } from 'ionic-angular';
import {CartProvider} from '../../providers/cart';
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public product:Product;
  public cartLength:number;
  public bannerText:string ;

  constructor(public navCtrl: NavController,
  			 private barcodeScanner:BarcodeScanner,
  			 public modalCtrl:ModalController,
         private cartProvider:CartProvider,
         public alertCtrl:AlertController) {
 
  }
   ngOnInit(){
     
     // A service which keeps track of the count of the items in the cart
     this.cartProvider.getCartData().subscribe((val)=>{
       this.cartLength = val.length;
       if (this.cartLength){
         this.bannerText = "Happy Shopping!.";
       }else{
          this.bannerText= "Looks like your cart is empty!. Scan and add products to your cart";
       }
       });
   }
   
   // Alert box if an exceptions are thrown
  showAlert(val){
    console.log(val);
   let alert = this.alertCtrl.create({
     title:'Barcode Scanned!',
     subTitle:'Barcode Value:'+val,
     message:'Invalid Json Format Error::You will not be able add the scanned product to the card. Please read the Dev Docs to know More!.',
     buttons:['OK']
   });
   alert.present();

  }

  // if Scanned data is of desired data type then create a Page to display info
  createScannedProductModal(product){
  	let scannedProductModal = this.modalCtrl.create(ScannedProductPage,{product:product})
    scannedProductModal.present();
  }
  scan(){
  	this.barcodeScanner.scan({'resultDisplayDuration':0}).
  	                    	then((data)=>{
     if(!data.cancelled){
     let barcodeText = data.text;
      
     try {

       this.product = JSON.parse(barcodeText);       // if the scanned data type doesn't match with the data type the app need
     console.log(this.product);                       // then exception is thrown and alert box is shown to state the same
     this.createScannedProductModal(this.product);
  
     }catch(exception){
       console.log("QR Scanned!, Invalid Json type.");
       this.showAlert(barcodeText);
     }

      
     
       	}

    },
  	(err)=>{
  		console.log(err);
  	})
  }
 
 // Button event which navigates to the Cart Page
 showCart(){
  this.navCtrl.push(CartPage);
 }


}
