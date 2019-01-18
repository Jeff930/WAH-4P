import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeIpPage } from './change-ip';
import { HeaderComponent } from './../../components/header/header';


@NgModule({
  declarations: [
    ChangeIpPage,
    HeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChangeIpPage),
  ],
})
export class ChangeIpPageModule {}
