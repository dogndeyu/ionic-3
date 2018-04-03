import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientManager } from './client-manager';

@NgModule({
  declarations: [
    ClientManager,
  ],
  imports: [
    IonicPageModule.forChild(ClientManager),
  ],
})
export class ClientManagerModule {}
