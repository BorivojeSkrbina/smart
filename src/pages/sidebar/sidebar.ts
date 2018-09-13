import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarPage {

@ViewChild(Nav) nav: Nav;
pages: Array<{title: string, component: string, openTab?: any}>
rootPage = 'HomePage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Code', component: 'HomePage', openTab: 0 },
      { title: 'Map', component: 'HomePage', openTab: 1 },
      { title: 'Club', component: 'HomePage', openTab: 2 },
      { title: 'Network', component: 'HomePage', openTab: 3 },
      { title: 'Exchange', component: 'HomePage', openTab: 4 },
      { title: 'Tip', component: 'HomePage', openTab: 5 }
      // { title: 'My Lists', component: 'ListsTabsPage' },
      // { title: 'Direct Profile Link', component: 'DashboardTabsPage', openTab: 1 },
      // { title: 'No Tabs Link', component: 'NoTabsPage' },
    ]
  }

  openPage(page) {
    // let params = {};

 // The index is equal to the order of our tabs inside tabs.ts
//  if (page.openTab) {
//   params = { tabIndex: page.index };
// }

// The active child nav is our Tabs Navigation
// if (this.nav.getActiveChildNav() && page.index != undefined) {
//   this.nav.getActiveChildNav().select(page.index);
// } else {
  // Tabs are not active, so reset the root page 
  // In this case: moving to or from SpecialPage
//   this.nav.setRoot(page.component, page.index);
// }


    this.nav.setRoot(page.component, { openTab: page.openTab });
  }



}

