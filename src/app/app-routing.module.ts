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
  {path: 'seguimiento', component: SeguimientoAlumnadoComponent},
  {path: 'registrar-sancion', component: RegistrarSancionComponent},
  {path: 'modificar-sancion/:id', component: ModificarSancionComponent},
  {path: 'consultar-sanciones', component: ConsultarSancionesComponent},
  {path: 'registrar-tarea', component: RegistrarTareasComponent},
  {path: 'consultar-tareas-alumno-expulsado', component: ConsultarTareasAlumnoExpulsadoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
