import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { GlobalService } from 'src/app/global/global.service';
@Component({
  selector: 'app-liabilities',
  templateUrl: './liabilities.page.html',
  styleUrls: ['./liabilities.page.scss'],
})
export class LiabilitiesPage implements OnInit {
  liabs = []
  srcode = null;
  constructor(private http: HttpClient, private gs: GlobalService) {
    this.srcode = this.gs.getCode()
    console.log(this.srcode)
    this.getLiabilities();
  }

  ngOnInit() {
  }


  async getLiabilities() {
    const res = await this.http.get<any>(`http://18.141.228.159:8080/bsu-api/students/${this.srcode}/liab`).toPromise();
    this.liabs = res.data
  }

}
