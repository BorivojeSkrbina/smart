import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Tabs } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';





@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  pages = [
    { pageName: 'CodePage', title: 'Code', icon: 'fa-qrcode', id: 'codeTab' },
    { pageName: 'MapPage', title: 'Map', icon: 'fa-map', id: 'mapTab' },
    { pageName: 'ClubPage', title: 'Club', icon: 'fa-club', id: 'clubTab' },
    { pageName: 'NetworkPage', title: 'Network', icon: 'fa-globe', id: 'networkTab' },
    { pageName: 'ExchangePage', title: 'Exchange', icon: 'fa-exchange', id: 'exchangeTab' },
    { pageName: 'TipPage', title: 'Tip', icon: 'fa-tip', id: 'tipTab' }
  ];


  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  onTabSelect(ev: any) {
    if (ev.index === 2) {
      let alert = this.alertCtrl.create({
        title: 'Secret Page',
        message: 'Are you sure you want to access this page?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              this.superTabs.slideTo(this.selectedTab);
            }
          }, {
            text: 'Yes',
            handler: () => {
              this.selectedTab = ev.index;
            }
          }
        ]
      });
      // alert.present();
    } else {

console.log(ev);

      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    }
  }

  ionViewDidEnter() {
// console.log(this.navParams);

    let openTab = this.navParams.get('openTab');
    
    if (openTab) {
      
      console.log(openTab);
        this.superTabs.slideTo(openTab);

      
    }




  }


  
  



}
