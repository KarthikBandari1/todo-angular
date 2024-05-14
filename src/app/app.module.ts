import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { DeletedTodoComponent } from './components/deleted-todo/deleted-todo.component';
import { MatTableModule } from '@angular/material/table';
import { PendingTodosComponent } from './components/pending-todos/pending-todos.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DeletedTodoComponent,
    PendingTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,MatTableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
