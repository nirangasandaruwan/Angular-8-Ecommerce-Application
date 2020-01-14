import {environment} from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DataTableModule } from 'angular5-data-table';


import {FormsModule} from '@angular/forms';

import {CustomFormsModule} from 'ng2-validation';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomFormsModule,
    DataTableModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path:'',component: ProductsComponent},
      {path:'products',component: ProductsComponent},
      {path:'shopping-cart',component: ShoppingCartComponent},
      {path:'check-out',component: CheckOutComponent,canActivate:[AuthGuard]},
      {path:'order-success',component: OrderSuccessComponent,canActivate:[AuthGuard]},
      {path:'login',component: LoginComponent},
      {path:'my/orders',component: MyOrdersComponent,canActivate:[AuthGuard]},


      
      {path:'admin/orders',component: AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/products/new',component: ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},

      {path:'admin/products/:id',component: ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/products',component: AdminProductsComponent,canActivate:[AuthGuard,AdminAuthGuard]}
    ])

  ],
  providers: [AuthService,AuthGuard,UserService,AdminAuthGuard,CategoryService,ProductService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
