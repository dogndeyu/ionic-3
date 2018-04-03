import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationDetail } from './information-detail';

@NgModule({
  declarations: [
    InformationDetail,
  ],
  imports: [
    IonicPageModule.forChild(InformationDetail),
  ],
})
export class InformationDetailModule {}
