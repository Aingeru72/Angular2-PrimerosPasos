export class Todo {

    // Atributos
    id: number;
    userId: number;
    title: string;
    completed: boolean;

    constructor( title: string ) {
        console.log('Todo.constructor( title )');

        this.id = -1;
        this.userId = -1;
        this.title = title;
        this.completed = false;

    }

}
