import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// const END_POINT = 'https://jsonplaceholder.typicode.com';
const END_POINT = 'http://localhost:3000';

@Injectable()
export class TodosService {

  constructor( public http: HttpClient ) {
    console.log('TodosService constructor(http)');
  }

  getTodos(): Observable<any> {
    const url = END_POINT + '/todos';
    console.log(`TodosService getProductos() from ${url}`);

    return this.http.get(url);
  }

}
