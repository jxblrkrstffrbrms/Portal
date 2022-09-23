import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openregcert(){
    this.router.navigate(['regcert'])
  }

  opencurriculum(){
    this.router.navigate(['curriculum'])
  }

  openscholarship(){
    this.router.navigate(['scholarship'])
  }

  openstudentid(){
    this.router.navigate(['studentid'])
  }

  openliabilities(){
    this.router.navigate(['liabilities'])
  }

  openqrcode(){
    this.router.navigate(['qrcode'])
  }

  opensubjects(){
    this.router.navigate(['subjects'])
  }

}
