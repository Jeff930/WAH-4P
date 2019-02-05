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

  public homeTimer;
  public homeTimeout;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sms: SMS, public sender:SenderProvider,public http: HttpClient) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
    this.getLGU();
    this.getData();
  }

  getData(){
    this.homeTimeout=setTimeout(() => { 
      console.log("homecalled");
      this.getMessages();}, 5000);
  }
  
  error(){
    clearTimeout(this.homeTimeout);
    this.navCtrl.setRoot(ErrorPage);
  }

  getLGU(){
    this.http.get('../../assets/RHU.json').toPromise()
    //this.http.get('http://'+'/api/spasms/getRHU').toPromise()
    .then((rhuName:any)=> {
      console.log(rhuName[0].hfhudname);
      this.sender.setRhuName(rhuName[0].hfhudname); 
  },error=>{
    this.sender.setRhuName("**Cannot retrieve RHU name**");
    console.log("Cannot retrieve RHU name");
});}

getMessages(){
  this.http.get('../../assets/sample.json').toPromise()
  //this.http.get('http://'+'/api/spasms/getRHU').toPromise()
  .then((messageDetails:any)=> {
    if (messageDetails.length==0){
      this.getData();
    }else{
      console.log(JSON.stringify(messageDetails));
      this.sender.setMessages(messageDetails); 
      this.navCtrl.setRoot(SendPage);
    }  
},error=>{console.log("Cannot retrieve messages");
  this.navCtrl.setRoot(ErrorPage);
});
    
  }

changeIP(){
  clearTimeout(this.homeTimeout);
  this.navCtrl.setRoot(ChangeIpPage);
}
 
}
