import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreShopPage } from './score-shop';

@NgModule({
  declarations: [
    ScoreShopPage,
  ],
  imports: [
    IonicPageModule.forChild(ScoreShopPage),
  ],
})
export class ScoreShopPageModule {}
