import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskPage } from '../task/task.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  activeDays = []
  activeDate = null;

  today: number = Date.now()

  constructor(public modalCtrl: ModalController) {}

  todoList =[]

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: TaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()
  }

  delete(index){
    this.todoList.splice(index,1)

  }

}
