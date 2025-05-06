import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SeguimientoAlumnadoComponent } from './seguimiento-alumnado/seguimiento-alumnado.component';
import { RegistrarSancionComponent } from './registrar-sancion/registrar-sancion.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'seguimiento', component: SeguimientoAlumnadoComponent},
  {path: 'registrar-sancion', component: RegistrarSancionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
