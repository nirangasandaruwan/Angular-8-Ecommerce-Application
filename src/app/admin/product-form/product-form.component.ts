import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$ : Observable<any[]>;
  product = {};
  id;

  constructor(private route:ActivatedRoute,private router:Router,private categoryService: CategoryService,private productService:ProductService) { 

    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);

    if(this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    }

  }

  save(product) {

    if(this.id) {
      this.productService.update(this.id,product);
    }else{
      this.productService.create(product);
    }

    
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!confirm('Are you sure you want to delete this product?')) {
     return;
    }

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);


  }

 

  ngOnInit() {
  }

}
