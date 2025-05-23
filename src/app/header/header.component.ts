import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = '';
  user: string | null = null;
  showHeader = true;

  constructor(private location: Location, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  volverAtras() {
    this.location.back();
  }

  ngOnInit() {

    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    )
    .subscribe(data => {
      this.title = data['title'] || 'Seguimiento Conducta Alumnado';
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentUrl = event.urlAfterRedirects || event.url;
        const token = this.authService.getToken();

        this.showHeader = currentUrl !== '/login' && !!token;
      });

    this.user = this.authService.getEmailFromToken();
  }

  logout() {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: 'Se cerrará la sesión actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Cerrando sesión...',
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          }
        }).then(() => {
          this.authService.logout();
        });
      }
    });
  }


}
