import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject = new BehaviorSubject<string | null>(this.getToken());
  token$ = this.tokenSubject.asObservable();

  constructor(private router: Router) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
    this.tokenSubject.next(token);
  }

  logout(): void {
    localStorage.removeItem('token');

    this.tokenSubject.next(null);

    this.router.navigate(['/login']);
  }

  decodeJWT(token: string) {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payloadBase64));
    return decodedPayload;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getEmailFromToken(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload?.sub || payload?.email || null; 
  }

}
