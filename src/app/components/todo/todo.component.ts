import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private todo: Todo[];

  constructor() { }

  ngOnInit() {
    
  }

}
