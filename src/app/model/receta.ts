/* Modelo de clase RECETA para encapsular sus atributos */
export class Receta {

    // atributos
    nombre: string;
    descripcion: string;
    foto: string;
    likes: number;
    isGlutenFree: boolean;
    cocinero: string;
    ingredientes: string[];

    constructor( 
        nombre: string, 
        cocinero: string = 'Anónimo' // valor por defecto, si se crea sin este atributo o es 'undefined'
    ) {

        console.log('Receta constructor');
        this.nombre = nombre;
        this.descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus quia soluta, adipisci nulla eos odio neque, pariatur vero corrupti aspernatur perferendis suscipit eum sint deleniti in aliquam molestiae eligendi!';
        this.foto = 'assets/img/receta_default.jpg';
        this.likes = 0;
        this.isGlutenFree = false;
        this.cocinero = cocinero;
        this.ingredientes = [];
    }

    addIngrediente( ingrediente : string ) {
        this.ingredientes.push(ingrediente);
    }

}