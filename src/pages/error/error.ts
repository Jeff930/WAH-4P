import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
/**
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-error',
  templateUrl: 'error.html',
})
export class ErrorPage {

  errorTimer;
  errorInterval;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
    this.errorTimer=3;
    this.startErrorTimer();
  }

  startErrorTimer(){
    this.errorInterval=setInterval(() => { 
      this.errorTimer--;
      console.log("intervalcalled");
    }, 1000);
    setTimeout(() => { 
      this.navCtrl.setRoot(HomePage);
      clearInterval(this.errorInterval);
      console.log("timeoutcalled");
    }, 3000);
   

  }
}
