import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {

    this.db.list('/products').push(product);


  }

  getAll() : Observable<any[]> {
   
    return this.db.list('/products').snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
      )
    );;

  

    
  }

  get(productId) {
    return this.db.object('/products/'+productId).valueChanges();
  }


  update(productId, product){
    return this.db.object('/products/'+productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/'+productId).remove();
  }

}
