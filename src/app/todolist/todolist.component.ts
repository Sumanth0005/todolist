import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodoComponent {
  title = 'TodoTask';
  todoForm: FormGroup;
  todos: { name: string; complete: boolean }[] = [];
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
  }
  // function to add a todo
  addTodo() {
    if (this.todoForm.valid) {
      this.todos.push({
        name: this.todoForm.value.task,
        complete: false,
      });
      this.todoForm.reset();
    }
  }
  //function to delete the todo from the list
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
  //function handiling the task completion and marking it as complete
  taskCompletion(index: number) {
    this.todos[index].complete = !this.todos[index].complete;
    const status = this.todos[index].complete
      ? 'completed'
      : 'marked incomplete';
  }
}
