import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  first = []
  second = []
  third = []
  fourth = []
  constructor(private http: HttpClient) {
    this.getCurriculum();
   }

  ngOnInit() {
  }


  async getCurriculum() {
    const res = await this.http.get<any>('https://bsu-api.herokuapp.com/bsu-api/students/19-03745/curriculum').toPromise();
    //this.first = res.data.first
    //this.second = res.data.second
    //this.third = res.data.third
    this.fourth = res.data.fourth

    console.log(this.fourth)
  }
}
