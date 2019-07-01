import { Component, OnInit } from '@angular/core';
import { TestService } from '../MyService/test.service';


@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  NewTask

  constructor(public tasksService: TestService) { 
    this.NewTask = this.tasksService.getMyTask()
  }

  ngOnInit() {
    console.log(this.NewTask);
    
  }
 
  RemoveTask(NewTask){
    let index = this.NewTask.indexOf(NewTask)
     this.NewTask.splice(index, 1)

}
}
