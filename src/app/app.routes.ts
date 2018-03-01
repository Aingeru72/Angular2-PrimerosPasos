import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar los componentes
import { HomeComponent } from './home/home.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';

// rutas
const appRoutes: Routes = [
  { path: '',               component: HomeComponent },
  { path: 'receta',         component: RecetaComponent },
  { path: 'propiedades',    component: PropiedadesComponent },
  { path: '**',             component: Page404Component }
];

export const AppRouter = RouterModule.forRoot(appRoutes);