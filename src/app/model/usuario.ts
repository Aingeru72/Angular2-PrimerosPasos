/* Modelo de clase USUARIO para encapsular sus atributos */
import { Sexo } from '../model/sexo';

export class Usuario {

    // atributos
    id: number;     // Default = -1
    nombre: string; // required
    apellido: string;
    email: string;
    avatar: string;
    // ENUM [masculino, femenino, indeterminado]
    sexo: Sexo;

    constructor(id: number = -1,
                nombre: string,     // sin valor por defecto, dado que es requerido
                apellido: string = '',
                email: string = '' + nombre.toLowerCase() + '.' + apellido.toLowerCase() + id + '@iparcheff.com',
                avatar: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGb0leUMKbbkBePbNsPneaKzGnYdtiO2-mm0_bcnxQsu6zLiK',
                sexo: Sexo
            ) {

        console.log('Usuario constructor');
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.avatar = avatar;
        this.sexo = sexo;
    }
}

