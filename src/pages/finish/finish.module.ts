import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishPage } from './finish';
import { HeaderComponent } from './../../components/header/header';

@NgModule({
  declarations: [
    FinishPage,
    HeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(FinishPage),
  ],
})
export class FinishPageModule {}
