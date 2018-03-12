export class Todo {

    // Atributos
    id: number;
    userId: number;
    title: string;
    completed: boolean;

    constructor( title: string ) {
        console.log('Todo.constructor( title )');

        // this.id = -1; CHANGES: sin asignar para que lo autogenere json-server
        this.userId = -1;
        this.title = title;
        this.completed = false;

    }

}
