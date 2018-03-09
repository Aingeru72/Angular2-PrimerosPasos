import { Component, OnInit } from '@angular/core';
import { Coche } from '../../model/coche';
import { CochesService } from '../../providers/coches.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
// Importar jQuery > npm install --save-dev jquery
import * as $ from 'jquery';


@Component({
  selector: 'app-form-nuevo-coche',
  templateUrl: './form-nuevo-coche.component.html',
  styleUrls: ['./form-nuevo-coche.component.scss']
})
export class FormNuevoCocheComponent implements OnInit {

  formulario: FormGroup;

  constructor( private fb: FormBuilder, public recetasService: CochesService) {
    // Se puede acceder al Servicio 'RecetasService' con this.recetasService
    console.log('FormNuevoCocheComponent constructor()');
    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormNuevoCocheComponent ngOnInit()');
  }

  crearFormulario(): void {
    console.log('FormNuevoCocheComponent crearFormulario()');

    this.formulario = this.fb.group({

      // FormControl (~input) => [ '(default) value' , [Validators] ]
      marca: ['', [Validators.required, Validators.minLength(3)] ],
      modelo: ['', [Validators.required, Validators.minLength(3)] ],
      version: [ '', [] ],
      foto: ['', [] ],
      puertas: ['', [Validators.min(0)] ],
      caballos: ['', [Validators.min(0)] ],
      consumo: [ '', [Validators.min(0)] ]
    });
  }

  /**
   * Añadir receta a la lista de recetas
   */
  submit(elem): void {
    console.log('FormNuevoCocheComponent submit()');

    const marca = this.formulario.value.marca;
    const modelo = this.formulario.value.modelo;
    const version = this.formulario.value.version;
    // TODO: Verificar que es una dirección de imagen valida
    const foto = (this.formulario.value.foto) ? this.formulario.value.foto : '/assets/img/coche_default.jpg';
    const puertas = (this.formulario.value.puertas) ? this.formulario.value.puertas : 3;
    const caballos = (this.formulario.value.caballos) ? this.formulario.value.caballos : 100;
    const consumo = (this.formulario.value.consumo) ? this.formulario.value.consumo : 7;
    // Crear coche, rellenarla y añadirla a la lista de coches (catálogo)
    const coche = new Coche(marca, modelo, version, foto, puertas, caballos, consumo);
    this.recetasService.add(coche);

    // resetar inputs
    /* this.formulario.reset(); */
    this.crearFormulario();
    // Cerrar ventana modal del formulario, forzando la ejecución de la X del modal
    $('#cerrar-modal').click();
  }

  /**
   * Devuelve el estado de validez del input
   * @param control : estados del input
   */
  validationStatus( control: FormControl ): string {

    const CLASS_ERROR = 'has-error';
    const CLASS_SUCCESS = 'has-success';

    if ( control.dirty ) {
      return ( control.valid ) ? CLASS_SUCCESS : CLASS_ERROR;
    }

  }

}
