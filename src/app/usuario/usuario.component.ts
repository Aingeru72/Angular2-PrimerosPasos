import { Component, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario';
import { Sexo } from '../model/sexo';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    console.log('UsuarioComponent constructor');
    this.usuario = new Usuario(Math.floor(Math.random() * 100) + 1, 'Aingeru', 'Sanchez', undefined, undefined, Sexo.M);
    // this.usuario.email = '';
    // this.usuario.avatar = '';
    console.log('Nuevo usuario: %o', this.usuario);
  }

  ngOnInit() {
  }

}
