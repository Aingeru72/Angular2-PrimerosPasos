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
        descripcion: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus quia soluta',
        foto: string = 'assets/img/receta_default.jpg',
        likes: number = 0,
        isGlutenFree: boolean = false,
        cocinero: string = 'Anónimo', // valor por defecto, si se crea sin este atributo o es 'undefined'
    ) {

        console.log('Receta constructor');
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.foto = foto;
        this.likes = likes;
        this.isGlutenFree = isGlutenFree;
        this.cocinero = cocinero;
        this.ingredientes = [];
    }

    addIngrediente( ingrediente: string ) {
        this.ingredientes.push(ingrediente);
    }

}
