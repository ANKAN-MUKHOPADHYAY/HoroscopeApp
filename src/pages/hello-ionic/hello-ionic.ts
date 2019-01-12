import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor( public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {

  }
  details(sunSign: any){
    console.log(sunSign);
    const alert = this.alert.create({
      title: 'Helloow!',
      subTitle: 'Do you want to know more details about '+sunSign,
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            sessionStorage.setItem('selectedSunsign', sunSign);
            this.navCtrl.push('SignDetailsPage');
          }
        }
      ]
    });
    alert.present();
    

  }

}
