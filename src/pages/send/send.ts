import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SenderProvider} from '../../providers/sender/sender';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public sender:SenderProvider,) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter SendPage');
    this.messageDetails=this.sender.getMessages();
    console.log(this.messageDetails);
    this.sendMessage();
  }

  sendMessage(){
    this.messageDetails.length;
  }

}
