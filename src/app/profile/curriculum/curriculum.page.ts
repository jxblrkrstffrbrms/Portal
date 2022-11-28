import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { GlobalService } from 'src/app/global/global.service';

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
  srcode = null;
  constructor(private http: HttpClient, private globalService: GlobalService) {
    this.srcode = this.globalService.getCode()
    this.getCurriculum();
   }

  ngOnInit() {
  }


  async getCurriculum() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/students/${this.srcode}/curriculum`).toPromise();
    //this.first = res.data.first
    //this.second = res.data.second
    //this.third = res.data.third
    this.fourth = res.data.fourth

    console.log(this.fourth)
  }
}
