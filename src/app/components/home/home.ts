import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  imports: [
    ButtonModule, RouterModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  auth = inject(Auth);
  router = inject(Router);

  logOutUser() {
    if (this.auth !== null) {
      this.auth.signOut().then(
        () => {
          this.router.navigateByUrl('/login');
        }
      )
    }
  }
}
