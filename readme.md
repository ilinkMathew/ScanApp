# An Hybrid app built using Ionic Framework which has the capability of scanning 2 Dimensional Barcodes(QR code & Data Matrices)and display the stored product information


## Inorder to Use this app ensure that the data which is sorted on the QR code is of the below format.


```
  {
   "productTitle":" ",
   "productPrice":100 //numeric value
   "productImage":"", // image url
   "productRatings":4.3, // number value
   "productReviews":"45 reviews",
   "productDescription":"  " 

}

```


### Steps to run this on Android devices 

1.Setup Java JDK ,Android Studio & download the latest android SDK tools
2. install ionic 
3. Enable USB debugging and Developer mode on your device 
4. run $ionic cordova run android --device



More info on how to setup can be found (here):https://ionicframework.com/docs/intro/deploying/

