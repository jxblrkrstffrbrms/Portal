import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  monday = [];
  tuesday = [];
  wednesday = [];
  thursday = [];
  friday = [];
  saturday = [];
  sunday = [];
  constructor(private http: HttpClient, private gs: GlobalService) {
    this.getSchedule();
   }

  ngOnInit() {
  }

  async getSchedule() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/students/19-03745/schedule`).toPromise();
    const schedule = res.schedule;

    this.monday = schedule.monday;
    console.log(this.monday);
    this.tuesday = schedule.tuesday;
    this.wednesday = schedule.wednesday;
    this.thursday = schedule.thursday;
    this.friday = schedule.friday;
    this.saturday = schedule.saturday;
    this.sunday = schedule.sunday;
  }
}
