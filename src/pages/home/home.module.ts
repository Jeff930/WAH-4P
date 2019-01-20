import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HeaderComponent } from './../../components/header/header';
import { LguNameComponent } from './../../components/lgu-name/lgu-name';

@NgModule({
  declarations: [
    HomePage,
    HeaderComponent,
    LguNameComponent,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
