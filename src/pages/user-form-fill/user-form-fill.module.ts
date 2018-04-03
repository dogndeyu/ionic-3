import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserFormFill } from './user-form-fill';

@NgModule({
  declarations: [
    UserFormFill,
  ],
  imports: [
    IonicPageModule.forChild(UserFormFill),
  ],
})
export class UserFormFillModule {}
