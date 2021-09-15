import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  myName = "Murali Krishna"
  showFriends = false
  myDetails = {
    fname:"Murali",
    lname:"Krishna",
    email:"murali@gmail.com",
    phone:9663856625
  }
  myFriends =["Ram","Ravi","Kiran","Sam","Sunder"]
  showFriendsNow(){
    this.showFriends = !this.showFriends
    console.log(typeof this.showFriendsNow)

  }
}
