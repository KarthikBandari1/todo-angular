import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @ViewChild('form') form!: NgForm; 

  dataSource: MatTableDataSource<Todo> = new MatTableDataSource<Todo>();
  todos: Todo[] = [];
  newTodo1: Todo = {
    id: '',
    title: '',
    assignee: '',
    description: '',
    createdDate: new Date(),
    isCompleted: false,
    completedDate: new Date(),
    isDeleted: false,
    deletedDate: new Date(),
  };

  displayedColumns: string[] = ['isCompleted', 'title','description','assignee', 'createdDate', 'isDeleted'];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodos()
      .subscribe({
        next: (todos) => {
          this.todos = todos;
          this.dataSource.data = todos; 
        }
      });
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo1)
      .subscribe({
        next: (todo) => {
          this.getAllTodos(); 
        }
      });
    this.form.resetForm();

  }

  onCompletedChange(id: string, todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todoService.updateTodo(id, todo)
      .subscribe({
        next: (response) => {
          this.getAllTodos(); 
        }
      });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id)
      .subscribe({
        next: (resp) => {
          this.getAllTodos(); 
        }
      });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  
}
