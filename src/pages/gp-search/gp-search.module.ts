import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GpSearch } from './gp-search';

@NgModule({
  declarations: [
    GpSearch,
  ],
  imports: [
    IonicPageModule.forChild(GpSearch),
  ],
})
export class GpSearchModule {}
