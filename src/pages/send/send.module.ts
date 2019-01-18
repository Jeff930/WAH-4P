import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendPage } from './send';
import { HeaderComponent } from './../../components/header/header';

@NgModule({
  declarations: [
    SendPage,
    HeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(SendPage),
  ],
})
export class SendPageModule {}
