import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
// import { MOCK_RECETA } from './mock.recetas';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

/* Servidor json-server
*  @see: https://github.com/typicode/json-server
*/

@Injectable()
export class RecetasService {

  // Variable global
  recetas = new Array<Receta>();

  constructor( public http: HttpClient ) {
    console.log('RecetasService constructor()');
  }

  /**
   * Retorna todas las recetas
   */
  // CHANGES: ahora cargamos del END_POINT de json-server
  /* getAll(): Array<Receta> {
    console.log('RecetasService getAll()');
    // tslint:disable-next-line:prefer-const
    this.recetas = [];
    let receta;

    const jsonRecetas = JSON.parse(MOCK_RECETA);

    jsonRecetas.forEach( element => {

      receta = new Receta(
                          element.nombre,
                          element.descripcion,
                          element.foto,
                          element.likes,
                          element.isGlutenFree,
                          element.cocinero
                          );
      element.ingredientes.forEach(ingrediente => {
        receta.addIngrediente(ingrediente);
      });
      this.recetas.push(receta);

    });

    return this.recetas;
  } */

  getAll(): Observable<any> {
    const url = GLOBAL.END_POINT + '/recetas';
    console.log(`RecetasService getAll() from ${url}`);

    return this.http.get(url);
  }

  /**
   * Añadir nuevas recetas introducidas por el usuario
   * @param receta : nueva receta a añadir
   */
  add( receta: Receta ) {
    console.log('RecetasService add(receta)');
    /* this.recetas.unshift(receta); */
    // CHANGES: ahora almacenamos las recetas creadas en el END_POINT de json-server
    // mediante el método post
  }

  /**
   * Guardamos una nueva receta en el server
   * @param receta : nueva receta a añadir
   */
  post(receta: Receta): Observable<any> {
    const url = GLOBAL.END_POINT + '/recetas';
    console.log(`RecetasService post ${url}`);

    const body = receta; /* {
        'nombre': receta.nombre,
        'descripcion': receta.descripcion,
        'foto': receta.foto,
        'likes': receta.likes,
        'isGlutenFree': receta.isGlutenFree,
        'cocinero': receta.cocinero,
        'ingredientes': receta.ingredientes
    }; */
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post( url, body, httpOptions );
  }

  patch(idReceta: number, likes: number): Observable<any> {
    const url = GLOBAL.END_POINT + '/recetas/' + idReceta;
    console.log(`RecetasService patch ${url}`);

    const body = {'likes': likes};
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.patch( url, body, httpOptions );
  }
}
