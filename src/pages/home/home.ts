import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ErrorPage} from '../error/error';
import { ChangeIpPage} from '../change-ip/change-ip';
import { SendPage } from '../send/send';
import { SMS } from '@ionic-native/sms';
import { SenderProvider} from '../../providers/sender/sender';
import { HttpClient } from '@angular/common/http';

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

  startInterval:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sms: SMS, public sender:SenderProvider,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getData();
  }

  getData(){
    this.getLGU();
    this.getMessages();
  }

  error(){
    this.navCtrl.setRoot(ErrorPage);
  }

  getLGU(){
    this.http.get('../../assets/RHU.json').toPromise()
    //this.http.get('http://'+'/api/spasms/getRHU').toPromise()
    .then((data:any)=> {
      this.sender.LGU_Name = data[0].hfhudname; 
      console.log(this.sender.LGU_Name);
  },error=>{this.sender.LGU_Name = "**Cannot retrieve RHU name**";
    console.log("Cannot retrieve RHU name");
});}

getMessages(){
  this.http.get('../../assets/sample.json').toPromise()
  //this.http.get('http://'+'/api/spasms/getRHU').toPromise()
  .then((data:any)=> {
    this.sender.sendMessages(data); 
    console.log(this.sender.totalMessages);
},error=>{console.log("Cannot retrieve messages");
 // this.navCtrl.setRoot(ErrorPage);
});
    
  }
 
}
