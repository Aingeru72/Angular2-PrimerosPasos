import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({name: 'filterRecetas'})
export class FilterRecetas implements PipeTransform {

  transform(recetas: Receta[], searchText: string): Receta[] {
    // Si no hay recetas, no devolver nada
    if (!recetas) { return []; }
    // Si no hay texto para filtrar la búsqueda, return todas las recetas
    if (!searchText) { return recetas; }
    searchText = searchText.toLowerCase();
    let resultado = '';
    // En caso de escribir termino de búsqueda 'searchText'
    // buscar entre las recetas ese fragmento de texto
    // en los atributos de nombre, cocinero e ingredientes
    return recetas.filter( recetaIter => {
      resultado = recetaIter.nombre + recetaIter.cocinero + recetaIter.ingredientes;
      // CHANGES: sirve con añadir el array de ingredientes completo
      /* recetaIter.ingredientes.forEach( ingredIter => {
        resultado += ' ' + ingredIter;
      }); */
      resultado = resultado.toLowerCase();
      return resultado.includes(searchText);
    });
  }

}
