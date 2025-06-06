import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SeguimientoAlumnadoComponent } from './seguimiento-alumnado/seguimiento-alumnado.component';
import { RegistrarSancionComponent } from './registrar-sancion/registrar-sancion.component';
import { ModificarSancionComponent } from './modificar-sancion/modificar-sancion.component';
import { ConsultarSancionesComponent } from './consultar-sanciones/consultar-sanciones.component';
import { RegistrarTareasComponent } from './registrar-tareas/registrar-tareas.component';
import { ConsultarTareasAlumnoExpulsadoComponent } from './consultar-tareas-alumno-expulsado/consultar-tareas-alumno-expulsado.component';
import { AlumnosModalComponent } from './alumnos-modal/alumnos-modal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MdbModalModule, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartesModalComponent } from './partes-modal/partes-modal.component';
import { TareasModalComponent } from './tareas-modal/tareas-modal.component';
import { ModalDetalleSancionComponent } from './modal-detalle-sancion/modal-detalle-sancion.component';
import { ModalSancionComponent } from './modal-sancion/modal-sancion.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SeguimientoAlumnadoComponent,
    RegistrarSancionComponent,
    ModificarSancionComponent,
    ConsultarSancionesComponent,
    RegistrarTareasComponent,
    ConsultarTareasAlumnoExpulsadoComponent,
    AlumnosModalComponent,
    PartesModalComponent,
    TareasModalComponent,
    ModalDetalleSancionComponent,
    ModalSancionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MdbModalService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }