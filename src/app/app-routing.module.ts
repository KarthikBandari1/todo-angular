import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { DeletedTodoComponent } from './components/deleted-todo/deleted-todo.component';
import { PendingTodosComponent } from './components/pending-todos/pending-todos.component';


const routes: Routes = [
  {
    path: '',
    component: TodosComponent
},
{
    path: 'todos',
    component: TodosComponent
},
{
  path: 'deleted-todos',
  component: DeletedTodoComponent 
},
{
  path: 'pending-todos',
  component:  PendingTodosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
