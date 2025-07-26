import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-register',
  imports: [
    ButtonModule, RouterModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule,
    ReactiveFormsModule, PasswordModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  loginForm = this._fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  // Added registerForm
  registerForm = this._fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    fullName: ['', Validators.required]
    // Add more fields as needed
  });

  constructor(private authService: AuthService, private router: Router, private _fb: FormBuilder) { }

  get userName(): string {
    return this.loginForm.get('userName')?.value + '';
  }

  get password() {
    return this.loginForm.get('password')?.value + '';
  }

  // Example getter for registerForm fields
  get registerUserName(): string {
    return this.registerForm.get('userName')?.value + '';
  }

  get registerPassword(): string {
    return this.registerForm.get('password')?.value + '';
  }

  get registerEmail(): string {
    return this.registerForm.get('email')?.value + '';
  }

  get registerFullName(): string {
    return this.registerForm.get('fullName')?.value + '';
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

  // Example register handler
  onRegister() {
    if (this.registerForm.valid) {
      const { userName, password, email, fullName } = this.registerForm.value;
      // Call your register API here
      console.log('Registering:', userName, password, email, fullName);
      // Example:
      // this.authService.register(userName, password, email, fullName).subscribe(...)
    }
  }

}
