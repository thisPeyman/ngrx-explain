import { Component, OnInit } from '@angular/core';
import { TodoFacade } from './store/todo.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos$ = this.facade.todos$;

  constructor(public facade: TodoFacade) {}

  ngOnInit(): void {
    this.facade.loadTodos();
  }
}
