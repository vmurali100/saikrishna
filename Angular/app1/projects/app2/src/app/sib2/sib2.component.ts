import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.css']
})
export class Sib2Component implements OnInit {
  message: unknown;
  personInfo: any={
    fname:"",
    lname:"",
    email:""
  }
  users:any=[]

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.sendMsg.subscribe(res=>{
      console.log(res)
      this.message=res
    })
    this.cs.sendObj.subscribe(res=>{
      this.personInfo=res;
    })

    this.cs.sendUsers.subscribe(res=>{
      this.users=res
    })
  }

}
