import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulo para routing (navegación)
import { AppRouter } from './app.routes';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { Page404Component } from './page404/page404.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { CatalogoComponent } from './concesionario/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecetaComponent,
    PropiedadesComponent,
    UsuarioComponent,
    Page404Component,
    ConcesionarioComponent,
    CocheComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
