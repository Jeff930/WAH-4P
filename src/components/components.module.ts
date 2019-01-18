import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { LgUnameComponent } from './lg-uname/lg-uname';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [HeaderComponent,
    HeaderComponent,
    LgUnameComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    HeaderComponent,
    LgUnameComponent]
})
export class ComponentsModule {}
