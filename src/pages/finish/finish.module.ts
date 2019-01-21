import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinishPage } from './finish';
import { HeaderComponent } from './../../components/header/header';
import { LguNameComponent } from './../../components/lgu-name/lgu-name';

@NgModule({
  declarations: [
    FinishPage,
    HeaderComponent,
    LguNameComponent,
  ],
  imports: [
    IonicPageModule.forChild(FinishPage),
  ],
})
export class FinishPageModule {}
