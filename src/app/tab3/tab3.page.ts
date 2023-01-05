import { Component, ViewChild  } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../global/global.service';
import { Chart, registerables  } from 'chart.js';


Chart.register(...registerables)

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;

  chartSems = [];
  chartGwas = [];

  currentSem = ""
  image = null;
  imageSource = null;
  overall = "";
  previous_sem = "";
  srcode = null;
  viewOverview = true;
  expected = "";
  allGrades = null;
  constructor(private http: HttpClient, private router:Router, private gs: GlobalService) {
    this.srcode = this.gs.getCode()
    this.setGrades();
   }

   async getGradeSummary() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/grades/${this.srcode}/gwa`).toPromise();
    this.currentSem = res.current_sem;
    this.overall = res.overall;
    this.previous_sem = res.previous_sem;
    this.expected = res.expected_gwa;
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  async getGrades() {
    this.chartGwas = [];
    this.chartSems = [];
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/grades/${this.srcode}`).toPromise();
    this.allGrades = res
    console.log(this.allGrades);
    for (const sem of this.allGrades) { 
      this.chartSems.push(sem.sem_chart);
      this.chartGwas.push(sem.gwa)
    }
  }

  async getGraph() {
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

  async switchDisplay() {
    if (this.viewOverview) {
      this.viewOverview = false
      return
    }
    this.viewOverview = true
  }

  async createBarChart() {
    if (this.chartGwas.length < 1 && this.chartSems.length < 1){
      await this.getGrades();
    }
    console.log(this.chartSems)
    console.log(this.chartGwas)
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.chartSems,
        datasets: [{
          label: 'GWA',
          data: this.chartGwas,
          backgroundColor: 'rgb(136, 8, 8)', 
          borderColor: 'rgb(136, 8, 8)',
          borderWidth: 1
        }]
      },
    });
  }

}
