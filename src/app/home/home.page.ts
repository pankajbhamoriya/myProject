import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
usersList:any[]=[];
users:any[]=[];  
 firstName: any;
  constructor(public http: HttpClient) {
 this.http.get('https://randomuser.me/api/?results=10').subscribe(data=>{
//process the json data
this.usersList=data["results"]
})}
load()
{
this.http.get(`https://randomuser.me/api/?results=${this.firstName}`).subscribe(res=>{
this.users=res["results"];
  console.log(`https://randomuser.me/api/?results=${this.firstName}`);
  console.log(this.firstName);
})
}
handleFirstNameValue(event) {
      this.firstName = event.target.value;
    }
}
