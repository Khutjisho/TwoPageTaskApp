import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { MyTaskComponent } from './my-task/my-task.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule,MatCardModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule, MatListModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    MyTaskComponent, 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
