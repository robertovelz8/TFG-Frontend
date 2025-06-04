import { Component } from '@angular/core';
import { LoginInterface } from '../interfaces/login-interface';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  token!: string;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.emailValidator]],
      clave: ['', [Validators.required, Validators.minLength(6), this.noSpacesValidator]]
    });
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validaciones
    if (/\s/.test(email)) {
      return { invalidEmail: 'No debe contener espacios.' };
    }

    if (/[*+?]/.test(email)) {
      return { invalidEmail: 'No debe contener los símbolos (*+?).' };
    }

    if (!emailPattern.test(email)) {
      return { invalidEmail: 'Ingrese un correo válido.' };
    }

    return null;
  }

  noSpacesValidator(control: AbstractControl): ValidationErrors | null {
    const clave = control.value;

    if (/\s/.test(clave)) {
      return { noSpaces: 'La contraseña no debe contener espacios.' };
    }

    return null;
  }

  get email() {
    return this.loginForm.get('email');
  }
  get clave() {
    return this.loginForm.get('clave');
  }

  login() {

    let usu: LoginInterface = {
      email: this.loginForm.value.email,
      clave: this.loginForm.value.clave
    }
    console.log('Payload que se envía:', usu);
    this.loginService.login(usu).subscribe(
      (resp) => {
        this.token = resp.token;
        this.authService.setToken(this.token);
        this.router.navigate(["/seguimiento"]);
      },
      error => {
        console.log("Autenticación Fallida: ", error)
      }
    )
  }
}
