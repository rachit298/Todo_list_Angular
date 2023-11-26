import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  todo?: Todo;

  constructor(
    private routes: ActivatedRoute,
    private location: Location,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = this.routes.snapshot.paramMap.get('id')!;

    this.todoService.getTodo(id).subscribe((t) => (this.todo = t));
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo).subscribe(() => this.location.back());
  }
}
