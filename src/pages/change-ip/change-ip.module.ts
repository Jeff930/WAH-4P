import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeIpPage } from './change-ip';

@NgModule({
  declarations: [
    ChangeIpPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeIpPage),
  ],
})
export class ChangeIpPageModule {}
