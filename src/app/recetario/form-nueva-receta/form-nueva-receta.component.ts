import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
// Importar jQuery > npm install --save-dev jquery
import * as $ from 'jquery';

@Component({
  selector: 'app-form-nueva-receta',
  templateUrl: './form-nueva-receta.component.html',
  styleUrls: ['./form-nueva-receta.component.scss']
})
export class FormNuevaRecetaComponent implements OnInit {

  formulario: FormGroup;
  ingredientes: FormArray;

  constructor( private fb: FormBuilder, public recetasService: RecetasService) {
    // Se puede acceder al Servicio 'RecetasService' con this.recetasService
    console.log('FormNuevaRecetaComponent constructor()');
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
  }

  ngOnInit() {
    console.log('FormNuevaRecetaComponent ngOnInit()');
  }

  crearFormulario(): void {
    console.log('FormNuevaRecetaComponent crearFormulario()');

    this.formulario = this.fb.group({

      // FormControl (~input) => [ '(default) value' , [Validators] ]
      nombre: ['', [Validators.required, Validators.minLength(3)] ],
      cocinero: ['', [Validators.minLength(3)] ],
      isGlutenFree: [ 'false', [] ],
      foto: ['', [] ],
      descripcion: ['', [Validators.required, Validators.minLength(100)] ],
      ingredientes: this.fb.array( [ this.createIngredienteFormGroup() ],  Validators.required )
    });
  }

  /**
   * Creamos un FormGroup para los Ingredientes
   **/
  createIngredienteFormGroup(): FormGroup {
    console.log('FormNuevaRecetaComponent createIngredienteFormGroup(): FormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  /**
   * Evento para crear un nuevo Ingrediente
   */
  clickOtroIngrediente() {
    console.log('FormNuevaRecetaComponent clickOtroIngrediente()');
    this.ingredientes.push( this.createIngredienteFormGroup() );
  }

  /**
   * Eliminar un campo de la lista de ingredientes
   * @param index el indice del ingrediente en el formulario
   */
  clickEliminarIngrediente( index ) {
    console.log('FormNuevaRecetaComponent clickEliminarIngrediente()');
    if ( this.ingredientes.length > 1 ) {
      this.ingredientes.removeAt(index);
    }
  }

  /**
   * Añadir receta a la lista de recetas
   */
  submit(elem): void {
    console.log('FormNuevaRecetaComponent submit()');

    const nombre = this.formulario.value.nombre;
    const cocinero = this.formulario.value.cocinero;
    const isGlutenFree = (this.formulario.value.isGlutenFree) ? true : false;
    // TODO: Verificar que es una dirección de imagen valida
    const foto = (this.formulario.value.foto) ? this.formulario.value.foto : '/assets/img/receta_default.jpg';
    const descripcion = this.formulario.value.descripcion;
    // Crear receta, rellenarla y añadirla a la lista de recetas
    const receta = new Receta(nombre, descripcion, foto, 0, isGlutenFree, cocinero);
    // Añadir ingredientes (FormArray)
    this.formulario.value.ingredientes.map(element => {
      receta.addIngrediente( element.nombre );
    });
    this.recetasService.add(receta);

    // resetar inputs
    /* this.formulario.reset(); */
    this.crearFormulario();
    // Dejar solo un ingrediente
    this.ingredientes.controls.splice(1);
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
