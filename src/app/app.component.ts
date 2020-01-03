import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'EngineerAiTest';
  apidata: any;
  apidetails: any;
  sub: Subscription;
  apiId: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.sub = timer(0, 10000).pipe(switchMap(() => this.http.get('https://reqres.in/api/users?page=2'))).subscribe(res => {
      this.apidata = res;
      console.log('data', this.apidata);
      this.apidetails = this.apidata.data
    })
  }
  displayRowData(apirow) {
    console.log('apirowdata', apirow);
    this.apiId = apirow
  }
}
