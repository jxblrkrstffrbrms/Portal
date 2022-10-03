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
    const res = await this.http.get<any>('http://127.0.0.1:5000/bsu-api/students/19-03746/subjects').toPromise();
    this.subjects = res.subjects
  }

}
