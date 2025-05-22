import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguimientoAlumnadoComponent } from './seguimiento-alumnado/seguimiento-alumnado.component';
import { RegistrarSancionComponent } from './registrar-sancion/registrar-sancion.component';
import { ModificarSancionComponent } from './modificar-sancion/modificar-sancion.component';
import { ConsultarSancionesComponent } from './consultar-sanciones/consultar-sanciones.component';
import { RegistrarTareasComponent } from './registrar-tareas/registrar-tareas.component';
import { ConsultarTareasAlumnoExpulsadoComponent } from './consultar-tareas-alumno-expulsado/consultar-tareas-alumno-expulsado.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LogueadoGuard } from './guards/logueado.guard';

const routes: Routes = [
  {path: '', redirectTo: 'seguimiento', pathMatch: 'full'},
  {path: 'seguimiento', component: SeguimientoAlumnadoComponent, canActivate: [AuthGuard]},
  {path: 'registrar-sancion', component: RegistrarSancionComponent, canActivate: [AuthGuard]},
  {path: 'modificar-sancion/:id', component: ModificarSancionComponent, canActivate: [AuthGuard]},
  {path: 'consultar-sanciones', component: ConsultarSancionesComponent, canActivate: [AuthGuard]},
  {path: 'registrar-tarea', component: RegistrarTareasComponent, canActivate: [AuthGuard]},
  {path: 'consultar-tareas-alumno-expulsado', component: ConsultarTareasAlumnoExpulsadoComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
