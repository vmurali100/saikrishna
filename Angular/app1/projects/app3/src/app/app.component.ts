import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http:HttpClient){

  }
  userForm = new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl('')
  })
  title = 'app3';

  addUser(){
    console.log(this.userForm.valid)
    this._http.post("http://localhost:3000/users/",this.userForm.value).subscribe(response=>{
      console.log("User Added Successfully")
      this.userForm.reset()
    })
  }
}
