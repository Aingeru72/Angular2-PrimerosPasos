import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modulo para routing (navegación)
import { AppRouter } from './app.routes';
// Services
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';
// Pipes
import { RoundPipe } from './pipes/round.pipe';
import { FilterCoche } from './pipes/filter-coche.pipe';
import { FilterRecetas } from './pipes/filter-recetas.pipe';
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
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';
import { FormNuevaRecetaComponent } from './recetario/form-nueva-receta/form-nueva-receta.component';

@NgModule({
  declarations: [
    // Pipes
    RoundPipe,
    // Filtros
    FilterCoche,
    FilterRecetas,
    // Components
    AppComponent,
    HomeComponent,
    RecetaComponent,
    PropiedadesComponent,
    UsuarioComponent,
    Page404Component,
    ConcesionarioComponent,
    CocheComponent,
    CatalogoComponent,
    RecetarioComponent,
    RecetaDetalleComponent,
    FormNuevaRecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CochesService,
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
