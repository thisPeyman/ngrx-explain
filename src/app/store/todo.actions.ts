import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodos = createAction(
  '[Todo Page] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const showAllTodos = createAction('[Todo Page] Show All Todos');
export const showCompleteTodos = createAction(
  '[Todo Page] Show Complete Todos'
);
export const showNoneCompleteTodos = createAction(
  '[Todo Page] Show None Complete Todos'
);
