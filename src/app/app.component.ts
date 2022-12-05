import { Component } from '@angular/core';
import schedule from 'node-schedule'
import { LocalNotifications } from '@capacitor/local-notifications';
import { TodoService, taskCount } from 'src/app/todo.service';
import { GlobalService } from './global/global.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public tasks: Array<object>;
  constructor(public todoService: TodoService, private gb: GlobalService, private storage: Storage) {

  }


  async ngOnInit() {
    schedule.scheduleJob('*/1 * * * *', async () => {

      var d = new Date(); // for now
      let minutes = d.getMinutes();

      let time = `${d.getHours()}:${d.getMinutes()}`
      if (minutes < 10) {
        time = `${d.getHours()}:0${d.getMinutes()}`
      }
      console.log(time);
      const tasks = await this.getAllTasks();
      console.log(tasks)
    for (const task of tasks) {
      console.log(task['value'].itemDueDate);
      const taskDeadline = task['value'].itemDueDate.split('T')
      const taskDate = taskDeadline[0]
      const taskTime = taskDeadline[1]
      console.log()
      const taskDetails = task['value']
      var currentdate = new Date(); 
      var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()

      const tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
      let tomorrowActualDate = tomorrow.getDate().toString();
      if (parseInt(tomorrowActualDate) < 10) {
        tomorrowActualDate = `0${tomorrowActualDate}`;
      }

      const tomorrowDate = tomorrow.getFullYear() + "-" + (tomorrow.getMonth()+1) + "-" + tomorrowActualDate
      console.log(`tomorrow ${tomorrowDate}`)
      console.log(taskDate)
      console.log(taskTime.substring(0, 5))
      console.log(time)
      if (taskDate == tomorrowDate && taskTime.substring(0, 5) === time) {
        console.log('tomorrow!!!!')
        this.activityNotif(taskDetails.itemName, taskDetails.itemCategory, 'tomorrow')
      }

      console.log(datetime)

      if (taskDate === datetime && taskTime.substring(0, 5) === time) {
        this.activityNotif(taskDetails.itemName, taskDetails.itemCategory, 'now')
      }
    }
  })
}


  async activityNotif(title, category, when) {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: `Due ${when} - ${category}`,
          body: title,
          id: 1,
          schedule: {
            at: new Date(Date.now() + (1000 * 2))
          }
        }
      ]
    });
  }
  async getAllTasks() {
    let tasks: Array<object> = []
    await this.storage.forEach((key, value, index) => {
      tasks.push({'key':value, 'value':key})
    });
    return tasks;
  }

}
