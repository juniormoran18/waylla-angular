import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'; 

import { AppComponent } from './app.component';
//bootstrap imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
//
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RouterModule } from '@angular/router';


//RUTAS
import { app_routing } from "./app.routes";
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';

import { AuthService } from './servicios/auth.service';
import { FormsModule } from '@angular/forms';



var firebaseConfig = {
	apiKey: "AIzaSyDQ_EU8KZ_CeTop8_XsaxXTSU494Rt71nE",
    authDomain: "gamificador-turismo.firebaseapp.com",
    databaseURL: "https://gamificador-turismo.firebaseio.com",
    projectId: "gamificador-turismo",
    storageBucket: "gamificador-turismo.appspot.com",
    messagingSenderId: "27107697578"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicacionesComponent,
    EventosComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PrivadoPageComponent, 
    //AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    app_routing,
    RouterModule,
    RouterTestingModule,
    //bootstrap imports
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
