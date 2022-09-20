import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';
import {
  loadTodos,
  showAllTodos,
  showCompleteTodos,
  showNoneCompleteTodos,
} from './store/todo.actions';
import { selectFilteredTodos } from './store/todo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos$;

  constructor(private todoService: TodoService, private store: Store) {
    this.todos$ = this.store.select(selectFilteredTodos);
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((v) => {
      this.store.dispatch(loadTodos({ todos: v }));
    });
  }

  showAllTodos() {
    this.store.dispatch(showAllTodos());
  }
  showCompleteTodos() {
    this.store.dispatch(showCompleteTodos());
  }
  showNonCompleteTodos() {
    this.store.dispatch(showNoneCompleteTodos());
  }
}
