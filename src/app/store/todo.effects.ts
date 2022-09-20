import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { TodoService } from '../services/todo.service';
import { map, switchMap } from 'rxjs';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() =>
        this.todoService
          .getTodos()
          .pipe(map((todos) => TodoActions.loadTodosSuccess({ todos })))
      )
    )
  );

  constructor(
    private store: Store,
    private todoService: TodoService,
    private actions: Actions
  ) {}
}
