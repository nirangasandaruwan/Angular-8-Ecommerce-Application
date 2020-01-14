import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  products : Product[];
  subscription : Subscription;
  tableResource : DataTableResource<Product>;
  items : Product[]=[];
  itemCount: number;
  

  constructor(private productService:ProductService) {
   this.subscription =  this.productService.getAll().subscribe(
     products =>  {
       this.products = products;
       this.initializeTable(products);
      
     }

   )



    
   
   }


   private initializeTable(products : Product[]) {

    this.tableResource = new DataTableResource(this.products);
    this.tableResource.query({offset:0}).then(items=> this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);

   }

   reloadItems(params) {


    if(!this.tableResource){

      return;
    }

    this.tableResource.query(params).then(items=> this.items = items);

  }

  ngOnInit() {
  }

  log(val) { console.log(val); }

  filter(query : string) {
    console.log("filteredd...");
    this.products = (query) ? this.products.filter(p=>p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.products;
 
    this.initializeTable(this.products);
 
  }

}
