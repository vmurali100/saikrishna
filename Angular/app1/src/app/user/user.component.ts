import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  // fname=""
  person = {
    fname:"",
    lname:""
  }
  users:any = []
  ngOnInit(): void {
  }
  addUser(userForm:NgForm){
    console.log(userForm.value)
    // this.person = userForm.value
    // this.fname = userForm.value.fname

    this.users.push(userForm.value)
  }
}
