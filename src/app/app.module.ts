import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Modulo para routing (navegación)
import { AppRouter } from './app.routes';
// Services
import { CochesService } from './providers/coches.service';
// Pipes
import { RoundPipe } from './pipes/round.pipe';
import { FilterCoche } from './pipes/filter-coche.pipe';
// Componentes
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
    CatalogoComponent,
    RoundPipe,
    FilterCoche
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule
  ],
  providers: [
    CochesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
