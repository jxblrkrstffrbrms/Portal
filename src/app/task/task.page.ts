import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  categories = ['Personal', 'School', 'Work', 'Home']

  taskName
  taskDate
  taskPriority
  taskCategory
  taskObject={}
  handlerMessage
  roleMessage

  constructor(public modalCtrl: ModalController, public todoService: TodoService, private toast: ToastController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }

  async AddTask(){
    if (!this.taskName || !this.taskDate) {
      this.presentToast('Task name or due date can not be empty')
      this.dismiss();
      return
    }

    this.taskObject = ({itemName:this.taskName, itemDueDate:this.taskDate, itemPriority:this.taskPriority, itemCategory:this.taskCategory})
    let uid = 'activity' + this.taskName + this.taskDate

    if(uid){
      await this.todoService.addTask(uid, this.taskObject)
    }
    else{
      console.log("can't save empty task");
    }

    this.dismiss()
  }


  
  async presentToast(text) {
    const toast = await this.toast.create({
      message: text,
      duration: 3000,
      color: 'danger',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Dismiss clicked'; }
        }
      ]
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
