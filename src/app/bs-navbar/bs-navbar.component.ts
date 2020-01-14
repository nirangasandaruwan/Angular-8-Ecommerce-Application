import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {


  shoppingCartItemCount:number;

  constructor(public authService: AuthService,private shoppingCartService: ShoppingCartService) {

  }

  async ngOnInit() {

  //  let cart$ = await this.shoppingCartService.getCart();

  //  cart$.subscribe(cart => {

  //   this.shoppingCartItemCount = 0;

  //   for (const productId in cart.items) {
      
  //     this.shoppingCartItemCount += cart.items[productId].quantity;
        
      
  //   }

  //  })
   
    
    
    
    
  




   
  }

  logout(){
    this.authService.logout();

  }

}
