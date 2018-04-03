import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageReminds } from './message-reminds';

@NgModule({
  declarations: [
    MessageReminds,
  ],
  imports: [
    IonicPageModule.forChild(MessageReminds),
  ],
})
export class MessageRemindsModule {}
