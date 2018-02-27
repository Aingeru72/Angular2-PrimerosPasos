import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  // atributos
  nombre : string;
  descripcion : string;
  foto : string;
  likes : number;
  isGlutenFree : boolean;
  cocinero : string;
  ingredientes : string[];

  constructor() { 
    console.log("RecetaComponent Constructor");
    this.nombre = "Bokata Kalamares";
    this.descripcion = "Bocata en pan de chapata con calamares fritos ali-oli.";
    this.foto = "http://www.recetasderechupete.com/wp-content/uploads/2017/05/Bocata-de-calamares-a-la-madrile%C3%B1a-525x360.jpg";
    this.likes = 27;
    this.isGlutenFree = false;
    this.cocinero = "Karlos Argiñano";
    this.ingredientes = ["Calamares", "Pan", "Salsa ali-oli", "Limón"];
   }

  ngOnInit() {
    console.log("RecetaComponent ngOnInit");
  }

  plusLike() {
    this.likes++;
  }

}
