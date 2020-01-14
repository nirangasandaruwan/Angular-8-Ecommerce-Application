import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) {


   }

   getCategories() : Observable<any[]> {

     return this.db.list('/categories',ref => ref.orderByChild("name")).snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
      )
    );;;
   }
}
