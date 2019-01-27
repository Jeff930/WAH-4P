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

  constructor(public navCtrl: NavController, public navParams: NavParams, public sms: SMS, public sender:SenderProvider,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getLGU();
  }

  error(){
    this.navCtrl.setRoot(ChangeIpPage);
  }

  getLGU(){
    this.http.get('../../assets/RHU.json').toPromise()
    //this.http.get('http://'+'/api/spasms/getRHU').toPromise()
    .then((data:any)=> {
      this.sender.LGU_Name = data[0].hfhudname; 
      console.log(this.sender.LGU_Name);
      
    // if (this.LGU_name.length<=25){
    //   document.getElementById('LGU').style.fontSize = "6.2vw";
    // }else if (this.LGU_name.length<=30){
    //         document.getElementById('LGU').style.fontSize = "5.4vw";
    //       }else if (this.LGU_name.length<=35){
    //               document.getElementById('LGU').style.fontSize = "4.6vw";
    //             }else if (this.LGU_name.length<=40){
    //                     document.getElementById('LGU').style.fontSize = "3.8vw";
    //                   }else{
    //                     document.getElementById('LGU').style.fontSize = "3.2vw";}
  },error=>console.log("Cannot retrieve RHU name")
  )}

}
