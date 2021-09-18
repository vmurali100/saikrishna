import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output () sendMessage = new EventEmitter() // Creating an Instance of Event Emitter Class
 
  @Output () sendObj = new EventEmitter()

  @Output () sendArray = new EventEmitter()
 
  constructor() { }
  message = "Welcome to Chil to Parent Commmunication"
  person={
    fname:"Sai",
    lname:"Krishna"
  }

  users = ["Ram","Ravi","Sam","Sundar"]
  ngOnInit(): void {
  }
  
  sendMessageToParent(){
    this.sendMessage.emit(this.message)

  }

  sendObjToParent(){
    this.sendObj.emit(this.person)
  }

  sendArrayToParent(){
    this.sendArray.emit(this.users)
  }
}
