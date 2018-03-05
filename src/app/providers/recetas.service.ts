import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCK_RECETA } from './mock.recetas';

@Injectable()
export class RecetasService {

  constructor() {
    console.log('RecetasService constructor()');
  }

  /**
   * Retorna todas las recetas
   */
  getAll(): Array<Receta> {
    console.log('RecetasService getAll()');
    // tslint:disable-next-line:prefer-const
    let recetas = new Array<Receta>();
    let receta;

    const jsonRecetas = JSON.parse(MOCK_RECETA.recetario);

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
      recetas.push(receta);

    });

    return recetas;
  }

}
