/* Clase COCHE */
export class Coche {

    // Atributos
    id: number;
    marca: string;
    modelo: string;
    version: string;
    foto: string;
    // características
    puertas: number;
    caballos: number;
    consumo: number;
    tipo: Tipo;

    constructor(marca: string,
                modelo?: string,
                version?: string,
                foto: string = '/assets/img/coche_default.jpg',
                puertas?: number,
                caballos?: number,
                consumo?: number,
                tipo?: Tipo
                ) {
        this.id = -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.foto = foto;
        this.puertas = puertas;
        this.caballos = caballos;
        this.consumo = consumo;
        this.tipo = tipo;
    }

}

export enum Tipo {
    GASOLINA,
    DIESEL,
    HIBRIDO
}
