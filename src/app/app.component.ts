import { Component } from '@angular/core';
import schedule from 'node-schedule'
import { LocalNotifications } from '@capacitor/local-notifications';
import { TodoService, taskCount } from 'src/app/todo.service';
import { GlobalService } from './global/global.service';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public tasks: Array<object>;
  announcements;
  liabs;
  constructor(private http: HttpClient, public todoService: TodoService, private gb: GlobalService, private storage: Storage) {

  }


  async ngOnInit() {
    schedule.scheduleJob('*/1 * * * *', async () => {
      if (this.gb.loggedIn() && this.gb.getCode() != 'CICSADMIN') {
          var d = new Date(); // for now
          let minutes = d.getMinutes();

          let time = `${d.getHours()}:${d.getMinutes()}`
          if (minutes < 10) {
            time = `${d.getHours()}:0${d.getMinutes()}`
          }
          const tasks = await this.getAllTasks();


          await this.getLiabilities();
          for (const liab of this.liabs) {
            const item = await this.todoService.getStorage(liab._id)
            if (!item) {
              await this.todoService.addTask(liab._id, {liab: liab.name})
              this.liabNotif(liab.name, liab.amount);
            }
          }

          await this.getAnnouncements();
          for (const announcement of this.announcements) {
            const item = await this.todoService.getStorage(announcement._id)
            if (!item) {
              await this.todoService.addTask(announcement._id, {announcement: announcement.title})
              this.announcementNotif(announcement.title, announcement.description);
            }
          }
        for (const task of tasks) {

          if ('announcement' in task['value']) {
            continue;
          }

          if ('liab' in task['value']) {
            continue;
          }

          const taskDeadline = task['value'].itemDueDate.split('T')
          const taskDate = taskDeadline[0]
          const taskTime = taskDeadline[1]
          const taskDetails = task['value']
          var currentdate = new Date(); 
          var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getDate()

          const tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
          let tomorrowActualDate = tomorrow.getDate().toString();
          if (parseInt(tomorrowActualDate) < 10) {
            tomorrowActualDate = `0${tomorrowActualDate}`;
          }

          const tomorrowDate = tomorrow.getFullYear() + "-" + (tomorrow.getMonth()+1) + "-" + tomorrowActualDate
          if (taskDate == tomorrowDate && taskTime.substring(0, 5) === time) {
            this.activityNotif(taskDetails.itemName, taskDetails.itemCategory, 'tomorrow')
          }

          if (taskDate === datetime && taskTime.substring(0, 5) === time) {
            this.activityNotif(taskDetails.itemName, taskDetails.itemCategory, 'now')
          }
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


  async announcementNotif(title, description) {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'New CICS announcement',
          body: `${title} - ${description}`,
          id: 1,
          schedule: {
            at: new Date(Date.now() + (1000 * 2))
          }
        }
      ]
    });
  }

  async liabNotif(title, description) {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'New unpaid liability',
          body: `${title} - PHP${description}`,
          id: 1,
          schedule: {
            at: new Date(Date.now() + (1000 * 2))
          }
        }
      ]
    });
  }

  async getAnnouncements() {
    const res = await this.http.get<any>('http://18.141.228.159:8080/bsu-api/announcements/CICS').toPromise();
    this.announcements = res.data
  }


  async getLiabilities() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/students/${this.gb.getCode()}/liab`).toPromise();
    this.liabs = res.data
  }

  async getAllTasks() {
    let tasks: Array<object> = []
    await this.storage.forEach((key, value, index) => {
      tasks.push({'key':value, 'value':key})
    });
    return tasks;
  }

}
