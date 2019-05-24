import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoArray=[];


  addTodo(todo){
    this.todoArray.push({
      title: todo,
      isChecked: false
  });

  }


  // deleteItem(todo){

  //   for(let i=0 ;i<= this.todoArray.length ;i++){
  //    if(todo== this.todoArray[i]){
  //      console.log(todo)
  //     this.todoArray.splice(i,1)
  //    }
  //   }
    
  //  }

  deleteItem(todo) {
    const index: number = this.todoArray.indexOf(todo);
    if (index !== -1) {
        this.todoArray.splice(index, 1);
    }        
}



   alterCheck(todo){  
    todo.isChecked=!todo.isChecked;
    }
}
