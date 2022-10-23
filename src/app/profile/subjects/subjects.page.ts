import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects = []
  constructor(private http: HttpClient) {
    this.getSubjects();
   }

  ngOnInit() {
  }
  
  async getSubjects() {
    const res = await this.http.get<any>('https://bsu-api.herokuapp.com/bsu-api/students/19-03745/subjects').toPromise();
    this.subjects = res.subjects
  }

}
