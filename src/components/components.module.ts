import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { LguNameComponent } from './lgu-name/lgu-name';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [HeaderComponent,
    HeaderComponent,
    LguNameComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    HeaderComponent,
    LguNameComponent]
})
export class ComponentsModule {}
