import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : string;
  
  
  constructor(){
  }
  ngOnInit(){
    // Call a service that gets the data
    this.title = "TodoApp";
  }
}
