import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrustSearch } from './entrust-search';

@NgModule({
  declarations: [
    EntrustSearch,
  ],
  imports: [
    IonicPageModule.forChild(EntrustSearch),
  ],
})
export class EntrustSearchModule {}
