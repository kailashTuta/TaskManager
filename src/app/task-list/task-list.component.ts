import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'
import { Task } from '../task.model'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  a = "Kailash Tuta"
  tasks: Task[] = [];
  constructor(private taskService:TaskService){
    
  }
  ngOnInit():void{
    this.tasks = this.taskService.getTasks();
  }
}
