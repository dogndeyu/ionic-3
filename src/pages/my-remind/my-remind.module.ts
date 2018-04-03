import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRemind } from './my-remind';

@NgModule({
  declarations: [
    MyRemind,
  ],
  imports: [
    IonicPageModule.forChild(MyRemind),
  ],
})
export class MyRemindModule {}
