import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.page.html',
  styleUrls: ['./liabilities.page.scss'],
})
export class LiabilitiesPage implements OnInit {
  liabs = []
  constructor(private http: HttpClient) {
    this.getLiabilities();
  }

  ngOnInit() {
  }


  async getLiabilities() {
    const res = await this.http.get<any>('http://127.0.0.1:5000/bsu-api/students/19-03746/liab').toPromise();
    this.liabs = res.data
  }

}
