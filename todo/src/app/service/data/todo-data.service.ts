import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, TODO_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {




  constructor(private httpRequest:HttpClient) { }
  reteriveAllTodos(username) {
    return this.httpRequest.get<Todo[]>(`${TODO_API_URL}/users/${username}/todos`);
  }
  createBasicAuthenticationHttpHeader()
  {
    let username='ramarao'
    let password='ramntr'
    let basicHeaderString='Basic'+' '+ window.btoa(username + ':' + password);

    {
        Authorization: basicHeaderString
      }
    
    return basicHeaderString;

  }
  
  deleteTodoByid(username,id)
  {
    return this.httpRequest.delete(`${TODO_API_URL}/users/${username}/todos/${id}`)
  }
  getTodoByid(username,id)
  {
    return this.httpRequest.get<Todo>(`${TODO_API_URL}/users/${username}/todos/${id}`)
  }
  updateTodo(username,todo,id)
  {
    return this.httpRequest.put(`${TODO_API_URL}/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo)
  {
    return this.httpRequest.post(`${TODO_API_URL}/users/${username}/todos`,todo);
  }
}

