import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SenderProvider} from '../../providers/sender/sender';
import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  public progress;
  public messageDetails;
  public totalMessages;
  public sentMessages = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public sender:SenderProvider,public sms: SMS) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidEnter SendPage');
    this.messageDetails=this.sender.getMessages();
    console.log(this.messageDetails);
    console.log(this.messageDetails.length);
    this.totalMessages = this.messageDetails.length;
    this.sendMessage();
  }

  sendMessage(){
    for (var i = 0;i<this.totalMessages;i++){
      console.log(this.messageDetails[i]);
      console.log(this.messageDetails[i].msg);
      console.log(this.messageDetails[i].receiver);
      //this.sms.send(this.messageDetails[i].receiver,this.messageDetails[i].msg);
    }
    
  }

}
