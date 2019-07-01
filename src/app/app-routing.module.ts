import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { MyTaskComponent } from './my-task/my-task.component';

const routes: Routes = [{
  path: 'NewTask', component:NewTaskComponent},{
  path: 'MyTask', component:MyTaskComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
