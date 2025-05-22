import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    // 1) Si no hay token, sólo redirige y sale
    if (!token) {
      console.log('Token no encontrado');
      this.router.navigate(['/login']);
      return false;
    }

    // 2) Si hay token, intenta decodificar y comprobar expiración
    try {
      const decoded: any = jwtDecode(token);
      const now = Date.now() / 1000;
      if (decoded.exp > now) {
        return true;  // token válido, permitimos la ruta
      }
      // si exp <= now, cae al catch siguiente
    } catch (e) {
      console.error('Error al decodificar el token', e);
    }

    // 3) Token inválido o expirado: lo borramos y redirigimos
    localStorage.removeItem('token');
    console.log('Token inválido o expirado');
    this.router.navigate(['/login']);
    return false;
  }
}


