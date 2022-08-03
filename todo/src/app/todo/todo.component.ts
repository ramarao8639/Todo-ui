import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo:Todo

  constructor(private todoService:TodoDataService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
    this.todo=new Todo(this.id,'',false,new Date());
    if(this.todo.id!=-1)
   {
    this.todoService.getTodoByid('ramarao',this.id).subscribe(
      data =>this.todo=data
    )
    }
  }
  
  
  saveTodo(){
    if(this.todo.id==-1)
    {
      console.log(this.todo);
      this.todoService.createTodo('ramarao',this.todo).subscribe(
        data =>{
          console.log(data);
          this.route.navigate(['todos']);
        }
      )
    }
    else
    {
    this.todoService.updateTodo('ramarao',this.todo,this.id).subscribe(
      data =>{
        console.log(data);
        this.route.navigate(['todos']);
      }
    )
    }
  }

  

  

}
