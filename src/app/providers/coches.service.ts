import { Injectable } from '@angular/core';
import { Coche, Tipo } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';

@Injectable()
export class CochesService {

  coches = new Array<Coche>();

  constructor() {
    console.log('CochesService constructor');
  }

  /**
   * Retorna todos los coches en stock
   */
  getAll(): Array<Coche> {
    console.log('CochesService getAll()');
    this.coches = [];
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

        this.coches.push(coche);

    });

    return this.coches;
  }

  /**
   * Añadir nuevo coche registrado por el usuario
   * @param coche : nueva coche a añadir
   */
  add( coche: Coche ) {
    console.log('CochesService add(coche)');
    this.coches.unshift(coche);
  }
}
