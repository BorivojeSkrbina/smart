import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  myIndex: number;

  pages = [
    { pageName: 'CodePage', title: 'Code', icon: 'fa-qrcode', id: 'codeTab' },
    { pageName: 'MapPage', title: 'Map', icon: 'fa-map', id: 'mapTab' },
    { pageName: 'ClubPage', title: 'Club', icon: 'fa-club', id: 'clubTab' },
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
