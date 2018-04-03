import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPosition } from './my-position';

@NgModule({
  declarations: [
    MyPosition,
  ],
  imports: [
    IonicPageModule.forChild(MyPosition),
  ],
})
export class MyPositionModule {}
