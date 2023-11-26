import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosUrl = 'api/todos';

  Todo?: Todo;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions);
  }

  getTodo(id: string): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url, this.httpOptions);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl, this.httpOptions);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.todosUrl, todo, this.httpOptions);
  }

  deleteTodo(id: string): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;

    return this.http.delete<Todo>(url, this.httpOptions);
  }
}
