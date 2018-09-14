import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
// import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/Post';



@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {

  posts: Post[];

  code: string = "account";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private DataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.DataService.getRemoteData().subscribe(posts => {
      this.posts = posts;
    });
    
  }
}