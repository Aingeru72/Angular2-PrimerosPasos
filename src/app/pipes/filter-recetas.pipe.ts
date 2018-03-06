import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({name: 'filterRecetas'})
export class FilterRecetas implements PipeTransform {

  transform(recetas: Receta[], searchText: string): Receta[] {
    if (!recetas) { return []; }
    if (!searchText) { return recetas; }
    searchText = searchText.toLowerCase();
    let resultado = '';
    return recetas.filter( recetaIter => {
        resultado = recetaIter.nombre + '  ' + recetaIter.cocinero;
        resultado = resultado.toLowerCase();
        return resultado.includes(searchText);
    });
  }

}
