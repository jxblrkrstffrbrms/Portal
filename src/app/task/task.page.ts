import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
  taskObject

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }

  AddTask(){
    this.taskObject = ({itemName:this.taskName, itemDueDate:this.taskDate, itemPriority:this.taskPriority, itemCategory:this.taskCategory})

    this.dismiss()
  }

}
