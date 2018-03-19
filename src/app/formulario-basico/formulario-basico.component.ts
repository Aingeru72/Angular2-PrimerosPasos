import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.scss']
})
export class FormularioBasicoComponent implements OnInit {

  // formulario, en HTML => [formGroup]="formulario"
  formulario: FormGroup;

  // Angular Double Binding
  txtDinamico: string;

  constructor( private fb: FormBuilder ) {
    // crear formulario
    this.formulario = this.fb.group({
      // FormControl (~input): [value, [Validators]], en HTML => formControlName="nombre-form-control"
      nombre: [
              '', // valor por defecto
                [ // Validartors
                  Validators.required,
                  Validators.minLength(3)
                ]
              ]
    });

    this.txtDinamico = 'edítame';
  }

  ngOnInit() {
  }

  /**
   * Enviar formulario: en el html => <form (ngSubmit)="enviar($event)"
   */
  enviar() {
    console.log('FormularioBasicoComponent enviar()');
  }

}
