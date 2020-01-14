import { Product } from './product';

export class ShoppingCartItem {
    

    constructor(public productId:string,public product: Product, public quantity: number) {
    }
}