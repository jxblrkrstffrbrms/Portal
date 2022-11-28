import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { GlobalService } from 'src/app/global/global.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects = []
  srcode = null;
  constructor(private http: HttpClient, private gs: GlobalService) {
    this.srcode = this.gs.getCode()
    this.getSubjects();
   }

  ngOnInit() {
  }
  
  async getSubjects() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/students/${this.srcode}/subjects`).toPromise();
    this.subjects = res.subjects
  }

}
