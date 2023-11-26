import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'home', component: TodoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'edit/:id', component: EditTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
