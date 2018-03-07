import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from '../../model/receta';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// Importar jQuery > npm install --save-dev jquery
import * as $ from 'jquery';

@Component({
  selector: 'app-form-nueva-receta',
  templateUrl: './form-nueva-receta.component.html',
  styleUrls: ['./form-nueva-receta.component.scss']
})
export class FormNuevaRecetaComponent implements OnInit {

  formulario: FormGroup;

  constructor( private fb: FormBuilder, public recetasService: RecetasService) {
    // Se puede acceder al Servicio 'RecetasService' con this.recetasService
    console.log('FormNuevaRecetaComponent constructor()');
    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormNuevaRecetaComponent ngOnInit()');
  }

  crearFormulario(): void {
    console.log('FormNuevaRecetaComponent crearFormulario()');

    this.formulario = this.fb.group({

      // FormControl (~input) => [ '(default) value' , [Validators] ]
      nombre: ['', [Validators.required, Validators.minLength(1)] ],
      cocinero: ['', [Validators.minLength(3)] ],
      gluten: ['false', [] ],
      foto: ['', [] ],
      descripcion: ['', [Validators.required, Validators.minLength(100)] ]

    });
  }

  /**
   * Añadir receta a la lista de recetas
   */
  submit(elem): void {
    console.log('FormNuevaRecetaComponent submit()');

    const nombre = this.formulario.value.nombre;
    const cocinero = this.formulario.value.cocinero;
    const gluten = this.formulario.value.gluten;
    // TODO: Verificar que es una dirección de imagen valida
    const foto = (this.formulario.value.foto) ? this.formulario.value.foto : '/assets/img/receta_default.jpg';
    const descripcion = this.formulario.value.descripcion;
    // TODO: Añadir ingredientes (FormArray)

    const receta = new Receta(nombre, descripcion, foto, 0, gluten, cocinero);
    this.recetasService.add(receta);

    // resetar inputs
    this.formulario.reset();
    // Cerrar ventana modal del formulario, forzando la ejecución de la X del modal
    $('#cerrar-modal').click();
  }

}
