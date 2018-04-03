import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProprietInformation } from './propriet-information';

@NgModule({
  declarations: [
    ProprietInformation,
  ],
  imports: [
    IonicPageModule.forChild(ProprietInformation),
  ],
})
export class ProprietInformationModule {}
