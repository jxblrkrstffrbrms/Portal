import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global/global.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public is_admin = false;
  constructor(private router:Router, private globalService: GlobalService) {
    console.log('sheesh tabs');

    if (this.globalService.is_admin) {
      this.is_admin = true;
    }
  }

  logout() {
    this.router.navigate(['login']);
  }
}
