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
    setInterval(() => { 
      this.errorTimer--;
      console.log("called");
    }, 1000);
    setTimeout(() => { 
      this.navCtrl.setRoot(HomePage);
      console.log("called");
    }, 3000);
   

  }
}
