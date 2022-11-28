import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

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

  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }

  async AddTask(){
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

}
