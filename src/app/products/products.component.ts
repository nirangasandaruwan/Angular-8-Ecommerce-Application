import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  

  products : Product[] = [];
  category : string;
  filteredProducts : Product[] =[];
  cart: ShoppingCart;
  subscription : Subscription;

  constructor(private route: ActivatedRoute, private productService: ProductService,private shoppingCartService : ShoppingCartService) {
    
   
    
    this.productService
    .getAll()
    .switchMap( 
      products => { this.products = products;
      return route.queryParamMap;
      }).subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
  
      
    });
  
    console.log(this.products);

   


  }

  async ngOnInit() {
  //  this.subscription = (await this.shoppingCartService.getCart())
    
    
  //   .subscribe(
  //     cart => {
  //       let temp: any;
  //     temp = cart;
  //     this.cart = temp;


  //     console.log(cart);

  //     }
      
      
      
      
    //);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
