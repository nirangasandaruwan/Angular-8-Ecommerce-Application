import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 
  

  constructor(private auth:AuthService,router : Router,private userService : UserService){

    this.auth.user$.subscribe(user=>{
      if(!user){
        return;
      }
        


        

        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');

        if(!returnUrl) {
          return;
        }

        if(returnUrl) {
          localStorage.removeItem('returnUrl');
          router.navigateByUrl(returnUrl);
        }

        
      
    })

  }

  ngOnInit(): void {
   
  }
  
}
