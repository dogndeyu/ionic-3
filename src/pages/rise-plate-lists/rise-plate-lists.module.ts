import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RisePlateLists } from './rise-plate-lists';

@NgModule({
  declarations: [
    RisePlateLists,
  ],
  imports: [
    IonicPageModule.forChild(RisePlateLists),
  ],
})
export class RisePlateListsModule {}
