import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { GlobalService } from './global/global.service';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskCount = 0;
  constructor(private storage: Storage, private gb: GlobalService) {
    this.init()
   }

  addTask(key, value) {
    this.storage.set(key,value)
  }

  deleteTask(key) {
    this.storage.remove(key)
  }

  updateTask(key, newValue) {
    this.storage.set(key, newValue)
    this.getAllTasks()
  }

  getAllTasks() {
    taskCount = 0
    let task: Array<object> = []
    this.storage.forEach((key, value, index) => {

      task.push({'key':value, 'value':key})
      taskCount += 1;
    });
    return task
  }

  async init() {
    await this.storage.create()
  }
}

export let taskCount = 0;
