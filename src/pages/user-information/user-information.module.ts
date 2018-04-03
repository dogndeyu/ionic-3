import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserInformation } from './user-information';

@NgModule({
  declarations: [
    UserInformation,
  ],
  imports: [
    IonicPageModule.forChild(UserInformation),
  ],
})
export class UserInformationModule {}
