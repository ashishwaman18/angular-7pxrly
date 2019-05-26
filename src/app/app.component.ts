import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  todoArray=[];
  isinvalid=false;
  //storedarray=[];


  ngOnInit(){

    if (localStorage.getItem("services_assigned") === null) {
      localStorage.setItem('services_assigned', JSON.stringify(this.todoArray)); 
      
    }

    this.todoArray = JSON.parse(localStorage.getItem('services_assigned'));
   
  }

      addTodo(toDo){

    if(toDo.value==''){

      this.isinvalid=true;
      return false; 
    }
    else{
      this.isinvalid=false;
        this.todoArray.push({
          title: toDo.value,
          isChecked: false
        });

        localStorage.setItem('services_assigned', JSON.stringify(this.todoArray)); 

    // this.storedarray = JSON.parse(localStorage.getItem('services_assigned'));

        toDo.value=null;

    }
      }

  


  deleteItem(i) {
    // const index: number = this.todoArray.indexOf(todo);
    // if (index !== -1) {
        this.todoArray.splice(i, 1);
        localStorage.setItem('services_assigned', JSON.stringify(this.todoArray)); 

    // }        
}


  alterCheck(todo){  
    todo.isChecked=!todo.isChecked;
    }
}
