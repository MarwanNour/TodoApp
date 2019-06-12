import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    TodoInputComponent
  ],
  entryComponents:[
    // add custom modals here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  // add services in providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
