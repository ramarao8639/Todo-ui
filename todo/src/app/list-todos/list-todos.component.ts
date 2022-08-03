import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date)
  {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:Todo[];
 message :string;

  constructor(private todoService:TodoDataService,private router:Router) { }

  ngOnInit() {
  this.refreshTodos();
  }
refreshTodos(){
  this.todoService.reteriveAllTodos('ramarao').subscribe(
    response =>{
      console.log(response);
      this.todos=response;
    }
  )
}

  deleteTodo(id)
  {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodoByid('ramarao',id).subscribe(
      response => {
        console.log(response);
        this.message=`Delete of Todo ${id}  successfull`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id)
  {
    console.log(id);
    this.router.navigate(['todos',id])
  }
  addTodo()
  {
    this.router.navigate(['todos',-1])
  }
}
