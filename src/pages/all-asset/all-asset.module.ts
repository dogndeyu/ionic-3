import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllAsset } from './all-asset';

@NgModule({
  declarations: [
    AllAsset,
  ],
  imports: [
    IonicPageModule.forChild(AllAsset),
  ],
})
export class AllAssetModule {}
