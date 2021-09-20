import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.css']
})
export class Sib1Component implements OnInit {
  greeings="Welcome To Angular Communication Topic";
  // Step 1: Creating the Object
  person ={
    fname:"Sai",
    lname:"krishna",
    email:"Saikrishna@gmail.com"
  }

  users = ["Murali","Krishna","Ravi","Ram","Kiran"]
  constructor(private cs:CommonService) { } // Dependency Injection

  ngOnInit(): void {
  }
  sendMessageToSib2(){
    this.cs.sendMessageFromSib1ToSib2(this.greeings)
  }

  sendPersonToSib2(){
    this.cs.sensPersonToSib2(this.person)
  }

  sendUsersToSib2(){
    this.cs.sendUsersToSib2FromSib1(this.users)
  }
}
