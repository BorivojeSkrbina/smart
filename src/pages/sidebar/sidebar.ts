import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  component: string;
  icon: string;
  openTab?: any;
}

@IonicPage()
@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarPage {

  @ViewChild(Nav) nav: Nav;
  rootPage = 'HomePage';

  pages: PageInterface[] = [
    { title: 'Code', component: 'HomePage', icon: 'fa-qrcode', openTab: 0 },
    { title: 'Map', component: 'HomePage', icon: 'fa-map', openTab: 1 },
    { title: 'Club', component: 'HomePage', icon: 'fa-club', openTab: 2 },
    { title: 'Network', component: 'HomePage', icon: 'fa-globe', openTab: 3 },
    { title: 'Exchange', component: 'HomePage', icon: 'fa-exchange', openTab: 4 },
    { title: 'Tip', component: 'HomePage', icon: 'fa-tip', openTab: 5 },
    { title: 'Log Out', component: 'LogoutPage', icon: 'fa-logout' }
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  openPage(page: PageInterface) {


    let params = {};

    if (page.openTab) {
      params = { tabIndex: page.openTab };
    }

    if (this.nav.getActiveChildNav() && page.openTab != undefined) {
      this.nav.getActiveChildNav().slideTo(page.openTab);
    } else {
      this.nav.setRoot(page.component, params);
    }

  }

  isActive(page: PageInterface) {

  }



}

