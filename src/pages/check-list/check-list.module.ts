import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckList } from './check-list';

@NgModule({
  declarations: [
    CheckList,
  ],
  imports: [
    IonicPageModule.forChild(CheckList),
  ],
})
export class CheckListModule {}
