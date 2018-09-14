import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';


@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  myIndex: number;

  pages = [
    { pageName: 'NetworkPage', title: 'Network', icon: 'fa-globe', id: 'networkTab' },
    { pageName: 'ExchangePage', title: 'Exchange', icon: 'fa-exchange', id: 'exchangeTab' },
    { pageName: 'TipPage', title: 'Tip', icon: 'fa-tip', id: 'tipTab' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.myIndex = navParams.data.tabIndex || 0;


  }

  onTabSelect(ev: any) {
    this.selectedTab = ev.index;
  }

}
