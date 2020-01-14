import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from "./user";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {
    user$:Observable<firebase.User>;

    constructor(
        public route: ActivatedRoute,
        public ngZone: NgZone,
        public afAuth: AngularFireAuth,
        public router: Router,
         
        
    ) {


      this.user$ = this.afAuth.authState;
       
    }

  

    // Firebase Google Sign-in
    login() {
       let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/';
       localStorage.setItem('returnUrl',returnUrl);
        return this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
            .then(res => {
                console.log('Successfully logged in!');
              //   this.ngZone.run(() => {
              //     this.router.navigate([localStorage.getItem('returnUrl')]);
              // })
                
                
            }).catch(error => {
                console.log(error)
            });
    }

    // Firebase Logout 
    logout() {
        return this.afAuth.auth.signOut().then(() => {
           
        })
    }

    

    

}