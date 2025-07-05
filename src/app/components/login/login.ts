import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth/auth-service';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-login',
  imports: [
    ButtonModule, RouterModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule,
    ReactiveFormsModule, PasswordModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm = this._fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private authService: AuthService, private router: Router, private _fb: FormBuilder ) {}
  
  get userName(): string{
    return this.loginForm.get('userName')?.value + '';
  }

  get password(){
    return this.loginForm.get('password')?.value + '';
  }

  onLogin() {
    console.log("logging with: ", this.userName, this.password);
    this.authService
      .login(this.userName, this.password)
      .pipe()
      .subscribe({
        next: (user) => {
          // redirect to dashbaord
          this.router.navigateByUrl('/home');
        }
      });
  }


}
