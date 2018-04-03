import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Trade } from './trade';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    Trade,
  ],
  imports: [
    IonicPageModule.forChild(Trade), ComponentsModule
  ],
})
export class TradeModule { }
