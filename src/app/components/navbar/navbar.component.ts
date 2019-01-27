import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser = null;

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit() {
    this.authService._isAuthenticated()
                    .subscribe(user => this.currentUser = user);
  }

  logout(){
    this.authService._logout()
                    .then(() => {
                      this.router.navigate(['/login'])
                    });
  }

}
