import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectFeature = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(
  selectFeature,
  (state) => state.todos
);

export const selectShownTodosStatus = createSelector(
  selectFeature,
  (state) => state.shownTodosStatus
);

export const selectFilteredTodos = createSelector(
  selectTodos,
  selectShownTodosStatus,
  (todos, status) => {
    if (!todos) return null;

    if (status === 'All') {
      return todos;
    }
    const areCompleteTodosShown = status === 'Complete';

    return todos.filter((todo) => todo.completed === areCompleteTodosShown);
  }
);
