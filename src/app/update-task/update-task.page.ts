import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;

  categories = ['Personal', 'School', 'Work', 'Home']

  
  taskName
  taskDate
  taskPriority
  taskCategory
  taskObject={}

  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
    this.taskName = this.task.value.taskName
    this.taskDate = this.task.value.taskDate
    this.taskPriority = this.task.value.taskPriority
    this.taskCategory = this.task.value.taskCategory

  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }

  async update(){
    this.taskObject = ({itemName:this.taskName, itemDueDate:this.taskDate, itemPriority:this.taskPriority, itemCategory:this.taskCategory})
    let uid= this.task.key
    await this.todoService.updateTask(uid, this.taskObject)
    this.dismiss()
  }

}
