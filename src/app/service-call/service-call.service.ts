import { Injectable, NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [
    HttpModule
  ]
})

@Injectable()
export class ServiceCall {
  _data: any
  constructor(private http: Http) {
    this.http = http;
  }

	getItems() {
    return this.http
  	.get(`../assets/items.json`)
  	.map((res:Response) => res.json())
    .map( (data) => 
        this._data = data
   );
  }
}