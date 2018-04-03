import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabList } from './tab-list';

@NgModule({
  declarations: [
    TabList,
  ],
  imports: [
    IonicPageModule.forChild(TabList),
  ],
})
export class TabListModule {}
