import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public http: Http) {
  }

  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }

    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }
}
