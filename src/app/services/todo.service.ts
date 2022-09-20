import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { delay, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        delay(1000),
        map((v) => v.slice(0, 20))
      );
  }
}
