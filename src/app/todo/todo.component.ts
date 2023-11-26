import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  lists: any = {
    current: [],
    finished: [],
  };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  //CRUD operations below

  addTodo({ input }: any): void {
    input = input.trim();
    if (!input) {
      alert('Please add something in the input box to create a Todo.');
      return;
    }

    this.todoService
      .addTodo({ id: `${nanoid()}`, description: input } as Todo)
      .subscribe((todo) => this.lists.current.push(todo));
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.lists.current = todos.filter((t) => !t.checked);
      this.lists.finished = todos.filter((t) => t.checked);
    });
  }

  updateTodo({ todo }: any): void {
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo({ todo, todoCat }: any): void {
    if (todoCat === 'current') {
      this.lists.current = this.lists.current.filter((t: Todo) => t !== todo);
    } else if (todoCat === 'finished') {
      this.lists.finished = this.lists.finished.filter((t: Todo) => t !== todo);
    }
    this.todoService.deleteTodo(todo.id).subscribe();
  }

  //functions to give additional functionalities

  filterTodo({ todo }: any): void {
    todo.checked = true;
    this.lists.current = this.lists.current.filter((t: Todo) => todo != t);
    this.lists.finished.push(todo);
    this.todoService.updateTodo(todo).subscribe();
  }

  undoTodo({ todo }: any): void {
    this.lists.current.push(todo);
    this.lists.finished = this.lists.finished.filter((t: Todo) => todo != t);
  }
}
