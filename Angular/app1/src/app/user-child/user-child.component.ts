import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {

  constructor() { }
  @Input() dataFromParent: any // It indicates this varible is going to received data from Parent
  @Input() userFromParent:any // to receive an object from Parent
  @Input() usersFromParent:any // To receiev Array from Parent Componet
  ngOnInit(): void {
  }

}
