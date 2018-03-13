import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../model/receta';
import { RecetasService } from '../providers/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  // Input
  checked: boolean;

  // Atributos
  listaMostrada: Receta[] = [];
  listaRecetas: Receta[];
  recetasSinGluten: Receta[] = [];
  receta = null;
  temp = null;  // variable con el elemento pulsado anteriormente

  constructor(public recetasService: RecetasService) {
    console.log('RecetarioComponent constructor(RecetasService)');
    // Inicializar receta por defecto
    this.receta = new Receta('Receta');
  }

  ngOnInit() {
    console.log('RecetarioComponent ngOnInit()');
    this.listaRecetas = [];
    this.recetasService.getAll().subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
    this.listaMostrada = this.listaRecetas;
  }

  /**
   * Mapea los datos en formato JSON, que provienen del Servicio 'recetasService' Rest
   * @param result resultado de la petición (request)
   */
  mapeo( result: any ) {
    let receta: Receta;

    // Rellenar recetas
    result.forEach(element => {
      receta = new Receta(element.nombre,
                          element.descripcion,
                          element.foto,
                          element.likes,
                          element.isGlutenFree,
                          element.cocinero
                        );
      receta.ingredientes = element.ingredientes;

      // Rellenar la variable con la nueva tarea
      this.listaRecetas.push(receta);
    });

  }

  /**
   * Recoger la receta seleccionada en 'this.receta' y marcarla como activa
   * @param event : elemento activo
   * @param elem : receta seleccionada
   */
  select(event, elem) {
    console.log('RecetarioComponent setActive($event, elem)');
    console.log('$event.target: %o', event);
    console.log('elem: %o', elem);
    this.receta = elem;
    if (this.temp != null) {
      this.temp.classList.remove('seleccionado');
    }
    // Verificar que el event sea el elemento <a.list-group-item,> , y no los hijos de este
    while (!event.className.includes('list-group-item')) {
      event = event.parentElement;
    }
    // Clase nativa de bootstrap 'Active'
    event.classList.add('seleccionado');
    this.temp = event;
  }

  /**
   * Mostrar lista completa de recetas o para celíacos
   * @param filtroCeliacos : boolean para activar el filtro
   */
  cambiarLista(filtroCeliacos) {
    console.log('RecetarioComponent cambiarLista(filtroCeliacos %b)', filtroCeliacos.checked);

    // Actualizar la lista de recetas aptas para celíacos
    this.recetasSinGluten = [];
    this.listaRecetas.forEach( recetaIt => {
      if (recetaIt.isGlutenFree) {
        this.recetasSinGluten.push(recetaIt);
      }
    });
    // Mostrar una u otra lista
    if (filtroCeliacos.checked) {
      this.listaMostrada = this.recetasSinGluten;
    } else {
      this.listaMostrada = this.listaRecetas;
    }
  }

}
