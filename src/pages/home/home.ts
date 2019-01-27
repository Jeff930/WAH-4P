import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ErrorPage} from '../error/error';
import { ChangeIpPage} from '../change-ip/change-ip';
import { SendPage } from '../send/send';
import { SMS } from '@ionic-native/sms';
import { SenderProvider} from '../../providers/sender/sender';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sms: SMS, public sender:SenderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  error(){
    this.navCtrl.setRoot(ChangeIpPage);
  }

}
