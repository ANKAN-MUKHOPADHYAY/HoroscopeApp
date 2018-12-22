import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignDetailsPage} from '../sign-details/sign-details';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor( public navCtrl: NavController, public navParams: NavParams) {

  }
  details(sunSign: any){
    console.log(sunSign);
    sessionStorage.setItem('selectedSunsign', sunSign);
    this.navCtrl.push('SignDetailsPage');

  }
}
