import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import * as TodoActions from './todo.actions';

export interface TodoState {
  todos: Todo[] | null;
  shownTodosStatus: 'All' | 'Complete' | 'Non-Complete';
}

export const initialState: TodoState = { todos: null, shownTodosStatus: 'All' };

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state, action) => ({
    ...state,
    todos: action.todos,
  })),
  on(TodoActions.showAllTodos, (state) => ({
    ...state,
    shownTodosStatus: 'All',
  })),
  on(TodoActions.showCompleteTodos, (state) => ({
    ...state,
    shownTodosStatus: 'Complete',
  })),
  on(TodoActions.showNoneCompleteTodos, (state) => ({
    ...state,
    shownTodosStatus: 'Non-Complete',
  }))
);
