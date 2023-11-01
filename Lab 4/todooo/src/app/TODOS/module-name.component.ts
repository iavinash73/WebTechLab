import { Component,OnInit } from '@angular/core';
import{Todo} from './../models/Todo';
@Component({
  selector: 'app-module-name',
  templateUrl: './module-name.component.html',
  styleUrls: ['./module-name.component.css']
})
export class MODULENAMEComponent implements OnInit {
  
  todo: Todo[] = [];
  inputtodo:string=""
  
  constructor(){}

   ngOnInit(): void {
     this.todo=[
      {
        content:'First todo',
        completed: false
      },
      {
        content:'Second todo',
        completed: true
      }
     ]
   }

   toggleDone (id: number) {
     this.todo.map((v,i)=>{
      if(i == id) v.completed =!v.completed;
      
      return v;
     })
   }

   deleteTodo (id: number) {
    this.todo=this.todo.filter((v,i)=>i!==id);
   }

   addTodo(){
    this.todo.push({
      content:this.inputtodo,
      completed: false
    });
   }

   
}
