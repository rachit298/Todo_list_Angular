import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  list_type = '';
  todos: Todo[] = [];

  @Input() list?: any;

  @Output() notifyForFilter = new EventEmitter<{ todo: Todo }>();

  @Output() notifyForDelete = new EventEmitter<{
    todo: Todo;
    todoCat: string;
  }>();

  @Output() notifyForEdit = new EventEmitter<{ todo: Todo }>();

  @Output() notifyForUndo = new EventEmitter<{ todo: Todo }>();

  ngOnInit(): void {
    this.list_type = this.list?.key;
    this.todos = this.list?.value;
  }
}
