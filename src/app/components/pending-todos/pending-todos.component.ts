import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-pending-todos',
  templateUrl: './pending-todos.component.html',
  styleUrl: './pending-todos.component.css'
})
export class PendingTodosComponent implements OnInit{
  todos: Todo[]=[];
 
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllPendingTodos()
  }

  getAllPendingTodos(){
    this.todoService.getAllPendingTodos()
    .subscribe({
      next: (res) => {
        this.todos = res;
      }
    });
  }
}
