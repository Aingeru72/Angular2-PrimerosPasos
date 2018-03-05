import { Injectable } from '@angular/core';
import { Coche, Tipo } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';

@Injectable()
export class CochesService {

  constructor() {
    console.log('CochesService constructor');
  }

  /**
   * Retorna todos los coches en stock
   */
  getAll(): Array<Coche> {
    console.log('CochesService getAll');
    // tslint:disable-next-line:prefer-const
    let coches = new Array<Coche>();
    let coche;

    const jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach( element => {

        coche = new Coche(
                          element.marca,
                          element.modelo,
                          element.version,
                          element.foto,
                          element.puertas,
                          element.caballos,
                          element.consumo
                          );

        coches.push(coche);

    });

    return coches;
  }

}
