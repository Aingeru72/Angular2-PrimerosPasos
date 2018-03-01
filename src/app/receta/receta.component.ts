import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  // atributos
  nombre: string;
  descripcion: string;
  foto: string;
  likes: number;
  isGlutenFree: boolean;
  cocinero: string;
  ingredientes: string[];
  // variables del menú desplegable de ingredientes
  mostrarIngredientes: boolean = false;
  glyphicon: string;

  constructor() {
    console.log('RecetaComponent Constructor');
    this.nombre = 'Bokata Kalamares';
    this.descripcion = 'Bocata en pan de chapata con calamares fritos ali-oli.';
    this.foto = 'http://www.recetasderechupete.com/wp-content/uploads/2017/05/Bocata-de-calamares-a-la-madrile%C3%B1a-525x360.jpg';
    this.likes = 27;
    this.isGlutenFree = false;
    this.cocinero = 'Karlos Argiñano';
    this.ingredientes = ['Calamares', 'Pan', 'Salsa ali-oli', 'Limón'];
    // menú de ingredientes oculto y el icono 'down' por defecto
    this.mostrarIngredientes = false;
    this.glyphicon = 'glyphicon-chevron-down';
   }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  plusLike() {
    this.likes++;
  }

  showIngredientes() {
    console.log('click showIngredientes()');
    this.mostrarIngredientes = !this.mostrarIngredientes;
    this.glyphicon = (this.mostrarIngredientes) ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down';
  }

}
