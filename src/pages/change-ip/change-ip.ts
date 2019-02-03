import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SenderProvider} from '../../providers/sender/sender';

/**
 * Generated class for the ChangeIpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-ip',
  templateUrl: 'change-ip.html',
})
export class ChangeIpPage {

  inputIpAddress;

  constructor(public navCtrl: NavController, public navParams: NavParams,public sender:SenderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeIpPage');
  }

  returnToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  saveIP(){
    this.sender.ipAddress=this.inputIpAddress;
    this.returnToHome();
  }
}
