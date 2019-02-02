import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    this.errorInterval=5;
    this.startErrorTimer();
  }

  startErrorTimer(){
    this.errorTimer=setTimeout(() => { 
      console.log("called");
      this.getMessages();}, 5000);
  }

}
