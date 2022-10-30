import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskPage } from '../task/task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  activeDays = []
  activeDate = null;

  today: number = Date.now()

  constructor(public modalCtrl: ModalController, public todoService: TodoService) {
    this.getAllTask()
  }

  todoList =[]

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: TaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      this.getAllTask()
    })

    return await modal.present()
  }

  delete(key){
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })
    console.log(selectedTask);

    modal.onDidDismiss().then(() =>{
      this.getAllTask()
    })

    return await modal.present()
  }
}
