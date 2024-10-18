import { Injectable } from '@angular/core';
import {Task} from './task.model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 1, title:'TK', description:'Kailash Tuta', completed:true
    },
    {
      id: 2, title:'TK', description:'Kailash Tuta', completed:true
    }
    
  ]
  getTasks(): Task[]{
    return this.tasks;
  }

  constructor() { }
}
