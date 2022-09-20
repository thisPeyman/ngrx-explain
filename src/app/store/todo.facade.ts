import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TodoSelectors from './todo.selectors';
import * as TodoActions from './todo.actions';

@Injectable({ providedIn: 'root' })
export class TodoFacade {
  todos$ = this.store.select(TodoSelectors.selectFilteredTodos);

  constructor(private store: Store) {}

  loadTodos() {
    this.store.dispatch(TodoActions.loadTodos());
  }

  showAllTodos() {
    this.store.dispatch(TodoActions.showAllTodos());
  }
  showCompleteTodos() {
    this.store.dispatch(TodoActions.showCompleteTodos());
  }
  showNonCompleteTodos() {
    this.store.dispatch(TodoActions.showNoneCompleteTodos());
  }
}
