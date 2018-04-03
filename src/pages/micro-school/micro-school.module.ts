import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MicroSchoolPage } from './micro-school';

@NgModule({
  declarations: [
    MicroSchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(MicroSchoolPage),
  ],
})
export class MicroSchoolPageModule {}
