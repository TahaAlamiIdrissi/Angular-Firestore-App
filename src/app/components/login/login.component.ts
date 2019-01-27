import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "" ;
  password = "" ;

  constructor(private authService :AuthService,
              private router : Router,
              private flashMessageService : FlashMessagesService) { }

  ngOnInit() {
  }

  login(){
    this.authService._login(this.email,this.password)
    .then(()=>{
      this.flashMessageService.show('Sign In Successfully',{
        cssClass : "alert-success",
        timeout : 5000
      });
      this.router.navigate(['/']);
    })
    .catch((err)=>{
      this.flashMessageService.show(err.message,{
        cssClass : "alert-danger",
        timeout : 5000
      });
    });
  }

}
