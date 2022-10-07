import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  announcements = [];
  constructor(private http: HttpClient) {
    this.getAnnouncements();
  }

  options = {
    slidesPerView:  1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,

  }

  async getAnnouncements() {
    const res = await this.http.get<any>('https://bsu-api.herokuapp.com/bsu-api/announcements').toPromise();
    this.announcements = res.data
    console.log(this.announcements);
  }

}
