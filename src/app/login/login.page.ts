import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  sr_code = "";
  password = "";
  handlerMessage = '';
  roleMessage = '';
  protected aFormGroup: FormGroup;

  constructor(private router:Router, public formBuilder: FormBuilder, private http: HttpClient, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      sr_code: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      //name: ['', [Validators.required, Validators.minLength(5)]],
      //email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 3000,
      color: 'danger',
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

  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      await this.presentToast('Please complete all required fields');
      return false;
    } else {
      console.log('testing')
      const res = await this.http.post<any>('https://bsu-api.herokuapp.com//bsu-api/students/login', this.ionicForm.value).toPromise();
      console.log(res)
      if (res.message === 'Found a match on a student record.') {
        this.home();
      } else {
        this.sr_code = "";
        this.password = "";
        await this.presentToast('Invalid username or password');
      }
    }
  }

  home(){
    this.router.navigate(['/tabs'])
  }

  siteKey: string ="6LcYev0hAAAAAJ9UIw1V2DTNTs0reCFD_sDAfS0T";

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Forgot Password',
      message: 'Enter your registered email address below. An email will be sent to this address for password reset confirmation.',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Email Address',
        }]
    });

    await alert.present();
  }

}
