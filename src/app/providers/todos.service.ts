import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';

// const END_POINT = 'https://jsonplaceholder.typicode.com';
const END_POINT = 'http://localhost:3000';
/* Para arrancar el servidor en local:
0. Instalar json-server vía npm --> 'npm install -g json-server'
1. Arrancar el servidor en consola --> 'json-server --watch db.json' */

@Injectable()
export class TodosService {

  constructor( public http: HttpClient ) {
    console.log('TodosService constructor(http)');
  }

  getTodos(): Observable<any> {
    const url = END_POINT + '/todos';
    console.log(`TodosService getTodos() from ${url}`);

    return this.http.get(url);
  }

  delete(id): Observable<any> {
    const url = END_POINT + '/todos/' + id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

  post(todo: Todo): Observable<any> {
    const url = END_POINT + '/todos/';
    console.log(`TodosService put ${url}`);

    const body = {
                  // "id": todo.id,
                  'userId': todo.userId,
                  'title': todo.title,
                  'completed': todo.completed
                };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body, httpOptions );
  }

}
