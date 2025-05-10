import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SeguimientoAlumnadoComponent } from './seguimiento-alumnado/seguimiento-alumnado.component';
import { RegistrarSancionComponent } from './registrar-sancion/registrar-sancion.component';
import { ModificarSancionComponent } from './modificar-sancion/modificar-sancion.component';
import { ConsultarSancionesComponent } from './consultar-sanciones/consultar-sanciones.component';
import { ConsultarSancionComponent } from './consultar-sancion/consultar-sancion.component';
import { RegistrarTareasComponent } from './registrar-tareas/registrar-tareas.component';
import { ConsultarTareasAlumnoExpulsadoComponent } from './consultar-tareas-alumno-expulsado/consultar-tareas-alumno-expulsado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SeguimientoAlumnadoComponent,
    RegistrarSancionComponent,
    ModificarSancionComponent,
    ConsultarSancionesComponent,
    ConsultarSancionComponent,
    RegistrarTareasComponent,
    ConsultarTareasAlumnoExpulsadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
