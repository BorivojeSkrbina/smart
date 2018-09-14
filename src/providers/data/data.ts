import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Post } from '../../models/Post';


@Injectable()
export class DataProvider {

  postsUrl: string = '../../json/vendors.json';

  constructor(private http: HttpClient) {

  }


  getRemoteData() : Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
   
  }

}
