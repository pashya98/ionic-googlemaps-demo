import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkerPage } from './index';

@NgModule({
  declarations: [
    MarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkerPage),
  ],
})
export class MarkerPageModule {}
