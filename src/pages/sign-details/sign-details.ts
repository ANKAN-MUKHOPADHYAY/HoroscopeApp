import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the SignDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-details',
  templateUrl: 'sign-details.html',
})
export class SignDetailsPage {

  sunSign: any=sessionStorage.getItem("selectedSunsign");
  url: any="https://horoscope-api.herokuapp.com/horoscope/today/"+sessionStorage.getItem("selectedSunsign");
  today: any; todayDesc:any; todayHoroscope:Observable<any>;

  weekurl: any="https://horoscope-api.herokuapp.com/horoscope/week/"+sessionStorage.getItem("selectedSunsign");
  week: any; weekDesc:any; weekHoroscope:Observable<any>;

  monthurl: any="https://horoscope-api.herokuapp.com/horoscope/month/"+sessionStorage.getItem("selectedSunsign");
  month: any; monthDesc:any; monthHoroscope:Observable<any>;

  loader: any = null;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loading: LoadingController) {
    this.presentLoader();
    console.log(this.sunSign);
    this.todayHoroscope=this.http.get(this.url);
    this.todayHoroscope.subscribe(data=>{
      this.hideLoader();
      console.log(data);
      this.today=data.date;
      this.todayDesc=data.horoscope;
    });

    this.weekHoroscope=this.http.get(this.weekurl);
    this.weekHoroscope.subscribe(data=>{
      console.log(data);
      this.week=data.week;
      this.weekDesc=data.horoscope;
    });

      this.monthHoroscope=this.http.get(this.monthurl);
      this.monthHoroscope.subscribe(data=>{
        console.log(data);
        this.month=data.month;
        this.monthDesc=data.horoscope;
      });

  }

  presentLoader(){
    this.loader = this.loading.create({
      content : 'Please wait. Loading...'
    });
    this.loader.present();
  }

  hideLoader(){
    if(this.loader){
      this.loader.dismiss();
      this.loader = null;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignDetailsPage');
  }

}
