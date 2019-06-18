import { Injectable } from '@angular/core';

const storageName = "localstorage_todo_list";

@Injectable({
  providedIn: 'root'
})


export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }

  get(){
    // the ... iterates over arrays
    return [...this.todoList];
  }

  post(todo){
    this.todoList.push(todo);
    return this.get();
  }

  // updates stored list
  private update(){

  }
  
  put(todo, title, description, dueDate){
    
  }

  destroy(todo){

  }

}
