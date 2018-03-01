/* Modelo de clase USUARIO para encapsular sus atributos */
export class Usuario {

    // atributos
    id: number;     // Default = -1
    nombre: string; // required
    apellido: string;
    email: string;
    avatar: string;
    // ENUM [masculino, femenino, indeterminado]
    /* enum sexo: {
        M = 'Masculino',
        F = 'Femenino',
        I = 'Indefinido'
    } */

    constructor(id: number = -1,
                nombre: string,     // sin valor por defecto, dado que es requerido
                apellido: string = '',
                email: string = '' + nombre.toLowerCase() + '.' + apellido.toLocaleLowerCase() + id + '@iparcheff.com',
                avatar: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGb0leUMKbbkBePbNsPneaKzGnYdtiO2-mm0_bcnxQsu6zLiK',
                // sexo: string = 'I'
            ) {

        console.log('Usuario constructor');
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.avatar = avatar;
        // this.sexo = sexo;
    }

}
