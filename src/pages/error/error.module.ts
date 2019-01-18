import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrorPage } from './error';
import { HeaderComponent } from './../../components/header/header';

@NgModule({
  declarations: [
    ErrorPage,
    HeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ErrorPage),
  ],
})
export class ErrorPageModule {}
