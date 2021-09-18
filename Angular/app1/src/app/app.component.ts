import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msgFromchild :any = ""
  title = 'app1';
  myName = "Murali Krishna"
  showFriends = false
  objFrmChild1={
    fname:"",
    lname:""
  }
  myDetails = {
    fname:"Murali",
    lname:"Krishna",
    email:"murali@gmail.com",
    phone:9663856625
  }
  myFriends =["Ram","Ravi","Kiran","Sam","Sunder"]
  arrayUsers: any;
  showFriendsNow(){
    this.showFriends = !this.showFriends
    console.log(typeof this.showFriendsNow)

  }

  receiveMsgFrmChild(msg:any){
    console.log(msg)
    this.msgFromchild = msg
  }

  receiveObj(info:any){
    this.objFrmChild1=info
  }

  receiveArray(arr:any){
    this.arrayUsers = arr
  }
}
