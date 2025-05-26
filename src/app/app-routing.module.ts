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

const routes: Routes = [
  {path: '', redirectTo: 'seguimiento', pathMatch: 'full'},
  {path: 'seguimiento', component: SeguimientoAlumnadoComponent, canActivate: [AuthGuard]},
  {path: 'registrar-sancion', component: RegistrarSancionComponent, canActivate: [AuthGuard], data: { title: 'Registrar sanción' }},
  {path: 'modificar-sancion/:id', component: ModificarSancionComponent, canActivate: [AuthGuard], data: { title: 'Modificar sanción' }},
  {path: 'consultar-sanciones', component: ConsultarSancionesComponent, canActivate: [AuthGuard], data: { title: 'Consultar sanciones' }},
  {path: 'registrar-tarea', component: RegistrarTareasComponent, canActivate: [AuthGuard], data: { title: 'Registrar tarea' }},
  {path: 'consultar-tareas-alumno-expulsado', component: ConsultarTareasAlumnoExpulsadoComponent, canActivate: [AuthGuard], data: { title: 'Consultar tareas del alumno expulsado' }},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
