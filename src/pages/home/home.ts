import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  pages = [
    { pageName: 'NewsPage', title: 'News', icon: 'flame', id: 'newsTab' },
    { pageName: 'AboutPage', title: 'About', icon: 'help-circle', id: 'aboutTab' },
    { pageName: 'AccountPage', title: 'Body', icon: 'body', id: 'accountTab' },
    { pageName: 'NewsPage', title: 'News2', icon: 'flame', id: 'newsTab2' },
    { pageName: 'AboutPage', title: 'About2', icon: 'help-circle', id: 'aboutTab2' },
    { pageName: 'AccountPage', title: 'Body2', icon: 'body', id: 'accountTab2' }
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
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    }
  }

}
