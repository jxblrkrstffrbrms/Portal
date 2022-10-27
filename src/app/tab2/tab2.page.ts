import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  activeDays = []
  activeDate = null;

  today: number = Date.now()

  constructor() {}

  todoList =[{
    itemName : 'Capstone Project 2',
    itemDueDate: '11-19-22',
    itemPriority: 'High',
    itemCategory: 'School'
  }]

}
