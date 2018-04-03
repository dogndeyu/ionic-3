import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MySlide } from './my-slide';

@NgModule({
  declarations: [
    MySlide,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MySlide
  ]
})
export class MySlideModule {}
