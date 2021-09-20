import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  sendMsg = new Subject() // Cfeating an Instance of Subject to Send the data
  sendObj= new Subject()
  sendUsers=new Subject()
  constructor() { }

  sendMessageFromSib1ToSib2(msg:any){ // This method will recieve the data from Sib and Trigger the Subjet to Send data to Sib2
    this.sendMsg.next(msg)
  }
  // step 3 : Creating a method in Service , to receive from Sib1 ,  Send the Data to sib2 
  sensPersonToSib2(obj:any){
    this.sendObj.next(obj)
  }

  sendUsersToSib2FromSib1(users:any){
    this.sendUsers.next(users)
  }
}
