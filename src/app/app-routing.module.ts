import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguimientoAlumnadoComponent } from './seguimiento-alumnado/seguimiento-alumnado.component';
import { RegistrarSancionComponent } from './registrar-sancion/registrar-sancion.component';
import { ModificarSancionComponent } from './modificar-sancion/modificar-sancion.component';
import { ConsultarSancionesComponent } from './consultar-sanciones/consultar-sanciones.component';
import { RegistrarTareasComponent } from './registrar-tareas/registrar-tareas.component';
import { ConsultarTareasAlumnoExpulsadoComponent } from './consultar-tareas-alumno-expulsado/consultar-tareas-alumno-expulsado.component';

const routes: Routes = [
  {path: 'seguimiento', component: SeguimientoAlumnadoComponent},
  {path: 'registrar-sancion', component: RegistrarSancionComponent},
  {path: 'modificar-sancion', component: ModificarSancionComponent},
  {path: 'consultar-sanciones', component: ConsultarSancionesComponent},
  {path: 'registrar-tarea', component: RegistrarTareasComponent},
  {path: 'consultar-tareas-alumno-expulsado', component: ConsultarTareasAlumnoExpulsadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
