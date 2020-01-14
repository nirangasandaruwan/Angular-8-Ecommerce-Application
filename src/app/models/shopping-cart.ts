import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
    items: { [productId: string]: ShoppingCartItem};
   

    constructor(public itemsMap: { [productId: string]: ShoppingCartItem}){

        this.items = itemsMap || {};
        
       

    }


    
}