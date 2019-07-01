import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, RequiredValidator} from '@angular/forms';
import { TestService } from '../MyService/test.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

 NewTask;
 taskName
 Prior
 taskDate
 
  constructor(public tasksService: TestService) { 
    this.NewTask = this.tasksService.getMyTask()
   
  }

  
  ngOnInit() {
  }
  AddNewTask(taskName,Prior,taskDate){
   this.tasksService.AddNewTask(this.taskName,this.Prior,this.taskDate)
   console.log(this.taskName,this.Prior,this.taskDate);
   
  }
}

// personForm;
//public formBuilder:FormBuilder,
//this.personForm = formBuilder.group({
  //TaskName : ["", Validators.required],
  //Priority : ["", Validators.required],
 // TaskDate : ["", Validators.required]
//})
//
