import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global/global.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  srcode = null;
  name = null;
  image_url = null;
  constructor(private router:Router, private gb: GlobalService) { 
    this.srcode = this.gb.getCode();
    if (this.srcode == '198765150721') {
      this.name = 'Mary Joyce Llabres'
      this.image_url = './assets/pics/idpic.png'
    } else if (this.srcode == '19-00578') {
      this.name = 'Jax Blaire Kristoffer Ramos'
      this.image_url = './assets/pics/idpic2.png'
    } else if (this.srcode == '19-03406') {
      this.name = 'Jeanela Myca Molino'
      this.image_url = './assets/pics/idpic3.png'
    }
  }

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

  openannouncements(){
    this.router.navigate(['announcement'])
  }

  logout(){
    this.gb.logout();
    this.router.navigate(['login'])
  }

  openabout(){
    this.router.navigate(['abtprofile'])
  }

  openschedule() {
    this.router.navigate(['schedule']);
  }

}
