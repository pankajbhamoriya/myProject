import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
usersList:any[]=[];
  constructor(public http: HttpClient) {}
load()
{
this.http.get('https://randomuser.me/api/?results=10')
.subscribe(res => {
this.usersList=res["results"];
}, (err) => {
alert("failed");
});
}
}
