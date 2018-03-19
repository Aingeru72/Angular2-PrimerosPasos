import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar los componentes
import { HomeComponent } from './home/home.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TodosComponent } from './todos/todos.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';

// rutas
const appRoutes: Routes = [
  { path: '', redirectTo: '/recetario', pathMatch: 'full' },
  /* { path: '',               component: HomeComponent }, */
  { path: 'receta',         component: RecetaComponent },
  { path: 'propiedades',    component: PropiedadesComponent },
  { path: 'usuario',        component: UsuarioComponent },
  { path: 'concesionario',  component: ConcesionarioComponent },
  { path: 'recetario',      component: RecetarioComponent },
  { path: 'plantilla',      component: PlantillaComponent },
  { path: 'todos',          component: TodosComponent },
  { path: 'form-basico',    component: FormularioBasicoComponent },
  { path: '**',             component: Page404Component }
];

export const AppRouter = RouterModule.forRoot(appRoutes);
