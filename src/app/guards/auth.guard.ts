import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user = null;

  constructor(private authService: AuthService,
              private router: Router ) {}

  canActivate(/*next: ActivatedRouteSnapshot,state: RouterStateSnapshot*/): Observable<boolean> {

      return this.authService._isAuthenticated()
                      .pipe(
                        map(user => {
                            if (user) {
                              console.log('if', user);
                              return true;
                            } else {
                              this.router.navigate(['/']);
                              console.log('else', user);
                              return false;
                            }
                          }
                        )
                      );
  }
}
