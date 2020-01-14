import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }


  addItemToCart(){

    console.log("executed");

    //let cart = this.cartService.addToCart(this.product);


    
  }

  removeItemFromCart() {
   // let cart = this.cartService.removeFromCart(this.product);
    console.log('removeFromCart');
    
  }

  getQuantity() {
    if(!this.shoppingCart) return 0;

    console.log(this.shoppingCart.items);

    let item = this.shoppingCart.items[this.product.key];
    console.log(item);
    return item ? item.quantity : 0;
  }

}
