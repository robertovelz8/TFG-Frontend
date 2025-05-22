import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../interfaces/login-interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(usu: LoginInterface): Observable<any> {
    return this.http.post(`${environment.apiURL}/auth/authenticate`, usu);
  }

}
