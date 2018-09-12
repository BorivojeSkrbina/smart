import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home2Page } from './home2';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    Home2Page,
  ],
  imports: [
    IonicPageModule.forChild(Home2Page),
    SuperTabsModule
  ],
})
export class Home2PageModule {}
