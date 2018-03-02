/* Clase COCHE */
export class Coche {

    // Atributos
    id: number;
    marca: string;
    modelo: string;
    version: string;
    imagen: string;
    // características
    puertas: number;
    caballos: number;
    consumo: number;
    tipo: Tipo;

    constructor(marca: string,
                modelo: string,
                version: string,
                puertas: number = 0,
                caballos: number = 0,
                consumo: number = 0,
                tipo: Tipo
                ) {
        this.id = -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.imagen = '/assets/img/coche_default.jpg';
        this.puertas = puertas;
        this.caballos = caballos;
        this.consumo = consumo;
        this.tipo = tipo;
    }

}

export enum Tipo {
    GASOLINA,
    DIESEL,
    HÍBRIDO
}
