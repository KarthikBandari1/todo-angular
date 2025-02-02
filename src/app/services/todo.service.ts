import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //baseApiUrl: string = "https://localhost:7208/"
  baseApiUrl: string = "https://karthiktodoapi.azurewebsites.net/"

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl + 'api/todo'); 
  }

  addTodo(newTodo1: Todo): Observable<Todo> {
    newTodo1.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Todo>(this.baseApiUrl + 'api/todo', newTodo1); 
  }

  updateTodo(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseApiUrl+'api/todo/'+id,todo);
  }

  deleteTodo(id: string): Observable<Todo>{
    return this.http.delete<Todo>(this.baseApiUrl+'./api/todo/'+id);
  }
   
  getAllDeletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl+'./api/todo/get-deleted-todos');
  }
  
  undoDeleteTodo(id: string, todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.baseApiUrl+'api/todo/undo-deleted-todo/'+id,todo);
  }

  getAllPendingTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl + 'api/todo/get-pending-todos');
  }



}