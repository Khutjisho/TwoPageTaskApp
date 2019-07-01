import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // TaskName : string="";
  // Priority: string="";
  // TaskDate: string="";
  //NewTask = []

  Task = [];


  constructor() { 
     }

  getMyTask(){
       return this.Task
  }

  AddNewTask(taskName,Prior,taskDate){
    this.Task.push({TaskName:taskName,Priority:Prior,TaskDate:taskDate})
     //this.TaskName = ""
    // this.Priority =""
    // this.TaskDate = ""
  }

  RemoveTask(NewTask){
    let index = this.Task.indexOf(NewTask)
     this.Task.splice(index, 1)

}

}