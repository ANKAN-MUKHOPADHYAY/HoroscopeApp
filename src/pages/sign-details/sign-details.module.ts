import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignDetailsPage } from './sign-details';

@NgModule({
  declarations: [
    SignDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SignDetailsPage),
  ],
})
export class SignDetailsPageModule {}
