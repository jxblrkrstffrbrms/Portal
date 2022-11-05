import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  title = "";
  description = "";
  handlerMessage = '';
  roleMessage = '';
  create_mode = false;
  department = "CICS";
  announcements = []
  constructor(private http: HttpClient, private toastController: ToastController) {
    this.getAnnouncements();
   }

  ngOnInit() {
  }

  async createAnnouncement() {
    if (this.title === "" || this.description === "") {
      await this.presentToast('Please complete all required fields', 'danger')
    }
    else {
      const add_body = {"title": this.title, "description": this.description, "department": "CICS", "sr_code": "19-03745"}
      const res = await this.http.post<any>('http://127.0.0.1:5000/bsu-api/announcements', add_body).toPromise();
      if (res.message === 'Successfully created announcement') {
        await this.presentToast(res.message, 'success')
        this.getAnnouncements();
        this.create_mode = false
      } else {
        this.create_mode = false
        await this.presentToast(res.message, 'danger')
      }
    }

  }
  

  async presentToast(text, color) {
    const toast = await this.toastController.create({
      message: text,
      duration: 3000,
      color: color,
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

  async getAnnouncements() {
    const res = await this.http.get<any>('http://127.0.0.1:5000/bsu-api/announcements/CICS').toPromise();
    this.announcements = res.data
  }
}
