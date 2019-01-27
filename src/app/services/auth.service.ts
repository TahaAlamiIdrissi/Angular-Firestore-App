import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }

  _register(email,password){
      return this.afAuth.auth.createUserWithEmailAndPassword(email,password);//return a promise
  }

  _login(email,password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);//return a promise
  }
  _logout(){
    return this.afAuth.auth.signOut();//return a promise
  }
  _isAuthenticated(){
    return this.afAuth.user;// return an observable
  }
}
