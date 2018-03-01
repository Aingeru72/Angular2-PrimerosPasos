/* Modelo de clase USUARIO para encapsular sus atributos */
export class Usuario {

    // atributos
    id: number;     // Default = -1
    nombre: string; // required
    apellido: string;
    email: string;
    avatar: string;
    sexo: string;   // ENUM [masculino, femenino, indeterminado]

    constructor( nombre: string ) {

        console.log('Usuario constructor');
        this.id = -1;
        this.nombre = nombre; // required
        this.apellido: '';
        this.email: '' + this.nombre + this.apellido + '@iparcheff.com';
        this.avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGb0leUMKbbkBePbNsPneaKzGnYdtiO2-mm0_bcnxQsu6zLiK';
        this.sexo: 'I';
    }

}