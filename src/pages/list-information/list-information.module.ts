import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListInformation } from './list-information';

@NgModule({
  declarations: [
    ListInformation,
  ],
  imports: [
    IonicPageModule.forChild(ListInformation),
  ],
})
export class ListInformationModule {}
