import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SeguimientoAlumnadoComponent } from './seguimiento-alumnado/seguimiento-alumnado.component';
import { RegistrarSancionComponent } from './registrar-sancion/registrar-sancion.component';
import { ModificarSancionComponent } from './modificar-sancion/modificar-sancion.component';
import { ConsultarSancionesComponent } from './consultar-sanciones/consultar-sanciones.component';
import { RegistrarTareasComponent } from './registrar-tareas/registrar-tareas.component';
import { ConsultarTareasAlumnoExpulsadoComponent } from './consultar-tareas-alumno-expulsado/consultar-tareas-alumno-expulsado.component';
import { AlumnosModalComponent } from './alumnos-modal/alumnos-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MdbModalModule, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { PartesModalComponent } from './partes-modal/partes-modal.component';
import { TareasModalComponent } from './tareas-modal/tareas-modal.component';
import { ModalDetalleSancionComponent } from './modal-detalle-sancion/modal-detalle-sancion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SeguimientoAlumnadoComponent,
    RegistrarSancionComponent,
    ModificarSancionComponent,
    ConsultarSancionesComponent,
    RegistrarTareasComponent,
    ConsultarTareasAlumnoExpulsadoComponent,
    AlumnosModalComponent,
    PartesModalComponent,
    TareasModalComponent,
    ModalDetalleSancionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModalModule,
    FormsModule
  ],
  providers: [MdbModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }