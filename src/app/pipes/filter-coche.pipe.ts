/**
 * Filtro del buscador del catálogo de coches
 */
import { Pipe, PipeTransform } from '@angular/core';
import { Coche } from '../model/coche';
@Pipe({
  name: 'filterCoche'
})
export class FilterCoche implements PipeTransform {

    /**
     * Filtro para buscar en una colección de coches.
     * IMPORTANTE: No es CaseSensitive.
     * @param stock : Coche[] colección de coches
     * @param searchText : string con la marca o modelo del coche a buscar
     */
  transform(stock: Coche[], searchText: string): Coche[] {

    if (!stock) { return []; }
    if (!searchText) { return stock; }
    searchText = searchText.toLowerCase();
    let marcaModelo = '';
    return stock.filter( cocheIt => {
        marcaModelo = cocheIt.marca + ' ' + cocheIt.modelo;
        marcaModelo = marcaModelo.toLowerCase();
        return marcaModelo.includes(searchText);
    });
   }

}
