import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';

@Injectable()
export class ShoppingCartService {


  

  constructor(private db:AngularFirestore) { }


  private create(){
    console.log("executed");
    return this.db.doc('/shopping-carts').set({
      dateCreated: new Date().getTime()
    });
  }


  // public async getCart() : Promise<Observable<ShoppingCart>> {
  //   let cartId = await this.getOrCreateCartId();
  //   return this.db.doc('/shopping-carts/' + cartId).snapshotChanges().map(x => {

      
  //             return  new ShoppingCart(x.payload.data)
  //   })
  // }

  // private getShoppingCartItem(cartId: string, productId: string) {
  //   return this.db.doc('/shopping-carts/' + cartId + '/items/' + productId);
  // }

  private async getOrCreateCartId() : Promise<string> {

   

    let cartId = localStorage.getItem('cartId');
    if(cartId) {
      return cartId;
    }


      let result = await this.create();

      

     // localStorage.setItem('cartId',result.id);
    //  return result.id;


       this.create().then(result => {
        // localStorage.setItem('cartId',result.key);


        // return this.getCart(result.key);

      }); 


  

      

    
  }


  async addToCart(product: Product) {

   
    this.updateItemQuantity(product,1);



    
  }


  // async removeFromCart(product: Product) {

  //   // let cartId = await this.getOrCreateCartId();
  //   // const existingShoppingcartItem = this.getShoppingCartItem(cartId, product.key);

  //   // console.log(product);

  //   // existingShoppingcartItem.snapshotChanges().pipe(take(1))
  //   // .subscribe(item => {

      

  //   //     const quantity = (item.payload.child('/quantity').val() || 0) - 1 ;
       
  //   //     existingShoppingcartItem.update({product:product,quantity: quantity });
      

      
      
  //   // }); 


  //   await console.log('removeFromCart');


  //   this.updateItemQuantity(product,-1);



    
  // }



  private async updateItemQuantity(product:Product,change:number){


    let cartId = await this.getOrCreateCartId();
    // const existingShoppingcartItem = this.getShoppingCartItem(cartId, product.key);

    // console.log(product);

    // existingShoppingcartItem.snapshotChanges().pipe(take(1))
    // .subscribe(item => {

    //   if(item.payload.data){

    //    // const quantity = (item.payload.child('/quantity').val() || 0) + change ;

    //    const quantity = (item.payload.data() || 0) + change ;
       
    //     existingShoppingcartItem.update({quantity: quantity})
    //   }else {
    //     existingShoppingcartItem.set({product: product,quantity:change})
    //   }

      
      
    // }); 


    
  }


}
