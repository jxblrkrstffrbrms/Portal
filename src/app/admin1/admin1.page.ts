import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
import { GlobalService } from '../global/global.service';
@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.page.html',
  styleUrls: ['./admin1.page.scss'],
})
export class Admin1Page implements OnInit {
  title = "";
  description = "";
  handlerMessage = '';
  roleMessage = '';
  create_mode = false;
  department = "CICS";
  announcements = []
  loading = false;
  constructor(private http: HttpClient, private toastController: ToastController, private globalService: GlobalService) { }

  async ngOnInit() {
    this.getAnnouncements();
  }

  async createAnnouncement() {
    if (this.title === "" || this.description === "") {
      await this.presentToast('Please complete all required fields', 'danger')
    }
    else {
      console.log(this.globalService.getCode())
      this.loading = true;
      const add_body = {"title": this.title, "description": this.description, "department": "CICS", "sr_code": this.globalService.getCode()}
      const res = await this.http.post<any>('http://18.141.228.159:8080/bsu-api/announcements', add_body).toPromise();
      if (res.message === 'Successfully created announcement') {
        this.getAnnouncements();
        this.create_mode = false
        await this.presentToast(res.message, 'success')
      } else {
        this.create_mode = false
        await this.presentToast(res.message, 'danger')
      }
      this.loading = false;
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
    const res = await this.http.get<any>('http://18.141.228.159:8080/bsu-api/announcements/CICS').toPromise();
    this.announcements = res.data
  }


  edit() {
    console.log("sdsds")
    this.create_mode = true;
    this.title = "";
    this.description = "";
  }
}
