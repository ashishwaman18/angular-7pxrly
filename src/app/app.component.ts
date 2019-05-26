import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todoArray = [];
  isinvalid = false;

  constructor() {
    this.todoArray = JSON.parse(localStorage.getItem('services_assigned'));
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
      localStorage.setItem('services_assigned', JSON.stringify(this.todoArray));
      toDo.value = null;

    }
  }

  deleteItem(i) {
    this.todoArray.splice(i, 1);
    localStorage.setItem('services_assigned', JSON.stringify(this.todoArray));

  }

  alterCheck(todo) {
    todo.isChecked = !todo.isChecked;
  }
}
