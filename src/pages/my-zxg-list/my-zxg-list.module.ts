import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyZxgListPage } from './my-zxg-list';

@NgModule({
  declarations: [
    MyZxgListPage,
  ],
  imports: [
    IonicPageModule.forChild(MyZxgListPage),
  ],
})
export class MyZxgListPageModule {}
