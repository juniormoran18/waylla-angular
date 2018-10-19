import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PublicacionesComponent } from "./components/publicaciones/publicaciones.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";
import { PrivadoPageComponent } from "./components/privado-page/privado-page.component";


const app_routes: Routes = [
    { path: 'home', component: PrivadoPageComponent },
    { path: 'publicaciones', component: PublicacionesComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'login', component: LoginPageComponent},
    { path: 'register', component: RegisterPageComponent},
    { path: 'privado', component: HomeComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);