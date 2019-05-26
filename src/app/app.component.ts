import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todoArray = [];
  isinvalid = false;

  ngOnInit() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem('todos', JSON.stringify(this.todoArray));
    }
    this.todoArray = JSON.parse(localStorage.getItem('todos'));
  }

  addTodo(toDo) {

    if (toDo.value == '') {

      this.isinvalid = true;
      return false;
    }
    else {
      this.isinvalid = false;
      this.todoArray.push({
        title: toDo.value,
        isChecked: false
      });

      localStorage.setItem('todos', JSON.stringify(this.todoArray));
      toDo.value = null;

    }
  }

  deleteItem(i) {
    this.todoArray.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.todoArray));
  }


  alterCheck(todo) {
    todo.isChecked = !todo.isChecked;
  }
}
