import { inject, Injectable } from '@angular/core';
import { Auth, provideAuth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import { defer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {  }
  
  login(email: string, password: string): Observable<any> {
    const res = () => signInWithEmailAndPassword(this.auth, email, password);
    // build up a cold observable
    return defer(res);
  }
   // the sign up uses createUserWithEmailAndPassword
  signUp(email: string, password: string, custom: any): Observable<any> {
    const res = () => createUserWithEmailAndPassword(this.auth, email, password);
    // it also accepts an extra attributes, we will handle later
    return defer(res)
  }
  loginWithGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider(); // from @angular/fire/auth
    const res = () => signInWithPopup(this.auth, provider);
    return defer(res);
  }
}