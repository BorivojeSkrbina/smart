import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarPage {

@ViewChild(Nav) nav: Nav;
pages: Array<{title: string, component: string, openTab?: any}>
rootPage = 'HomePage';

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Tabs1', component: 'HomePage' },
      { title: 'Tabs2', component: 'Home2Page' }
      // { title: 'My Lists', component: 'ListsTabsPage' },
      // { title: 'Direct Profile Link', component: 'DashboardTabsPage', openTab: 1 },
      // { title: 'No Tabs Link', component: 'NoTabsPage' },
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }

}

