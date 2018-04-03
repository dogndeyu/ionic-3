import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PtzhBuy } from './ptzh-buy';

@NgModule({
  declarations: [
    PtzhBuy,
  ],
  imports: [
    IonicPageModule.forChild(PtzhBuy),
  ],
})
export class PtzhBuyModule {}
