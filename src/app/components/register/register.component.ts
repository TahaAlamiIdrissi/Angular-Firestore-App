import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

email = "";
password = "";

  constructor(private authService : AuthService,
              private router : Router,
              private flashMessageService : FlashMessagesService) { }

  ngOnInit() {
    
  }

  register(){
    this.authService._register(this.email,this.password)
                    .then(()=>{
                      this.flashMessageService.show('Account created successfully',{
                        cssClass : "alert-success",
                        timeout : 5000
                      });
                      this.router.navigate(['/login']);
                    })
                    .catch((err)=>{
                      this.flashMessageService.show(err.message,{
                        cssClass : "alert-danger",
                        timeout : 5000
                      });
                    });
  }
}
