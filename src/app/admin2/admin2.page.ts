import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import * as moment from 'moment';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.page.html',
  styleUrls: ['./admin2.page.scss'],
})
export class Admin2Page implements OnInit {
  subjects = []
  selectedSubject = null;
  selectedClass = null;
  classes = null;
  attendees = [1,2,3,4,5]
  exportLink = null;
  imageSource = null;
  image = null;
  classCode = null;

  handlerMessage = '';
  roleMessage = '';
  constructor(private http: HttpClient, private toastController: ToastController) {
    this.getSubjects();
   }

  ngOnInit() {
  }

  async getSubjects() {
    const res = await this.http.get<any>('http://18.141.228.159:8080/bsu-api/subjects').toPromise();
    this.subjects = res.data
  }

  async getClasses(subject_id) {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/subjects/${subject_id}/classes`).toPromise();
    this.classes = res.classes
  }

  async selected() {
    this.resetData();
    console.log(this.selectedSubject);
    await this.getClasses(this.selectedSubject);
  }

  async selectClass() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/classes/${this.selectedClass}/attendance`).toPromise();
    this.attendees = res.data
    console.log(this.attendees.length)
    if (this.attendees.length < 1) {
      this.presentToast('There are no records of any attendance in this class.', 'danger');
      return 
    } 
    this.exportLink = `http://18.141.228.159:8080/bsu-api/classes/${this.selectedClass}/export`
  }

  async createClass() {
    const body = {subject_id: this.selectedSubject, duration: '1'};
    const res = await this.http.post<any>('http://18.141.228.159:8080/bsu-api/classes', body).toPromise()
    this.classCode = res.code;
    await this.getImage();
  }

  async getImage(){
    const httpOptions : Object = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'image/png; charset=utf-8',
      }),
      responseType: 'blob'
    };
    this.image = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/classes/${this.classCode}`, httpOptions).toPromise();

    this.imageSource = window.URL.createObjectURL(this.image);
  }


  resetData() {
    this.attendees = [];
    this.classCode = null;
    this.imageSource = null;
    this.selectedClass = null;
    this.exportLink = null;
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

}
