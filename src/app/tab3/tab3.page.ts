import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../global/global.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentSem = ""
  image = null;
  imageSource = null;
  overall = "";
  previous_sem = "";
  srcode = null;
  constructor(private http: HttpClient, private router:Router, private gs: GlobalService) {
    this.srcode = this.gs.getCode()
    this.setGrades();
   }

   async getGradeSummary() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/grades/${this.srcode}/gwa`).toPromise();
    this.currentSem = res.current_sem;
    this.overall = res.overall;
    this.previous_sem = res.previous_sem;
  }

  async getGraph(){
    const httpOptions : Object = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'image/png; charset=utf-8',
      }),
      responseType: 'blob'
    };

    this.image = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/grades/${this.srcode}/graph`, httpOptions).toPromise();

    this.imageSource = window.URL.createObjectURL(this.image);
  }

  
  async setGrades(){
   
    this.getGradeSummary().then(() => {
      this.getGraph().then(() => {
        console.log("done");
      });
    });

  }

  openabout(){
    this.router.navigate(['abtgrades'])
  }

}
