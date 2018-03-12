import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // Declaración de variables
  tareas: Todo[];
  nuevaTarea: string;
  // contId: number; CHANGE: json-server asigna id automáticamente

  constructor( public todosService: TodosService ) {
    console.log('TodosComponent constructor(todosService)');
    // Definición (inicilización) de variables
    this.tareas = [];
    this.nuevaTarea = '';
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit()');
    this.cargarTareas();
  }

  /**
   * Cargar las tareas almacenadas en el servidor
   */
  cargarTareas() {
    console.log('TodosComponent cargarTareas()');
    // Limpiar lista de tareas
    this.tareas = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    ); // END subscribe
  }

  /**
   * Mapea los datos en formato JSON a Todo, que provienen del Servicio 'todosService' Rest
   * @param result resultado de la petición (request)
   */
  mapeo( result: any ) {
    let todo: Todo;

    // Recoger título de las tareas
    result.forEach(element => {
      todo = new Todo(element.title);
      todo.id = element.id;
      todo.userId = element.userId;
      todo.completed = element.completed;

      // Rellenar la variable con la nueva tarea
      this.tareas.push(todo);
    });

  }

  addTarea() {
    if (this.nuevaTarea !== '') {
      const tarea = new Todo(this.nuevaTarea);

      // Asignar el resto de atributos de Todo a la nuvea tarea
      /* tarea.id = this.obtenerUltimoId() + 1; CHANGES: dejar que json-server asigne el id */
      tarea.userId = 72;
      tarea.completed = false;

      /* this.tareas.push(tarea);
      CHANGES: Ahora se modifican, guardan y eliminan en e servidor */
      this.todosService.post(tarea).subscribe(
        result => {
          console.log('TodosComponent new %o', result);
          this.cargarTareas();
        },
        error => {
          alert(`No de pudo crear la nueva tarea ${tarea.title}`);
          console.error(error);
        }
      );
      this.nuevaTarea = '';


      document.getElementById('warn-tarea-vacia').style.display = 'none';
      document.getElementById('input-tarea').focus();
    } else {
      document.getElementById('warn-tarea-vacia').style.display = 'block';
    }

  }

  /**
   * Obtiene el id de la última tarea
   */
  obtenerUltimoId(): number {
    const posicion = this.tareas.length;
    return this.tareas[posicion - 1].id;
  }

  /**
   * Cambia el atributo 'completed' de la tarea con id
   * @param id : id de la tarea
   */
  cambiarEstado(id) {
    const indice = this.buscarTareaPorId(id);
    this.tareas[indice].completed = !this.tareas[indice].completed;
  }

  /**
   * Elimina la tarea de la lista 'tareas' por id
   * @param id : id de la tarea
   */
  eliminarTarea(id) {
    // CHANGES: eliminar tarea en el servidor
    /* const indice = this.buscarTareaPorId(id);
    this.tareas.splice(indice, 1); */
    this.todosService.delete(id).subscribe(
      result => {
        this.cargarTareas();
      },
      error => {
        alert(`No de pudo eliminar la tarea`);
        console.error(error);
      }
    );
  }

  /**
   * Devuelve el indice de la tarea a partir de su id
   * @param id : id de la tarea
   */
  buscarTareaPorId(id): number {
    let i = 0;
    let encontrado = false;

    while ( !encontrado ) {
      if ( this.tareas[i].id === id ) {
        encontrado = true;
      } else {
        i++;
      }
    }
    return i;
  }


}
