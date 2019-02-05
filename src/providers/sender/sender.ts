import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SenderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SenderProvider {

  public rhuName;
  public totalMessages;
  public messageDetails;
  public ipAddress='192.6.8.1';
  public protocol='http://';

  constructor(public http: HttpClient) {
    console.log('Hello SenderProvider Provider');
  }

  setMessages(messageDetails){
    this.messageDetails=messageDetails;
    this.totalMessages=messageDetails.length;
    console.log(messageDetails.length);
  }

  getMessages(){
    return this.messageDetails;
  }

  setRhuName(name){
    this.rhuName=name;
    console.log(this.rhuName);
  }

  setIpAddress(newIp){
    this.ipAddress=newIp;
    console.log(this.ipAddress);
  }

}
