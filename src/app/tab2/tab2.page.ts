import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  activeDays = []
  activeDate = null;
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    console.log(this.activeDate);
    const alert = await this.alertController.create({
      header: 'Add a reminder',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Date',
          attributes: {
            maxlength: 8,
          },
        },
        {
          placeholder: 'Time',
          attributes: {
            maxlength: 8,
          },
        },
      ],
    });

    await alert.present();
  }

  

}
