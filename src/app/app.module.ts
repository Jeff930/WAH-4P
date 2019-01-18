import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChangeIpPage } from '../pages/change-ip/change-ip';
import { ErrorPage } from '../pages/error/error';
import { SendPage } from '../pages/send/send';
import { FinishPage } from '../pages/finish/finish';
import { SenderProvider } from '../providers/sender/sender';

import { ComponentsModule } from './../components/components.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChangeIpPage,
    ErrorPage,
    SendPage,
    FinishPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChangeIpPage,
    ErrorPage,
    SendPage,
    FinishPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SenderProvider
  ]
})
export class AppModule {}
