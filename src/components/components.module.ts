import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { LgUnameComponent } from './lg-uname/lg-uname';
@NgModule({
	declarations: [HeaderComponent,
    HeaderComponent,
    LgUnameComponent],
	imports: [],
	exports: [HeaderComponent,
    HeaderComponent,
    LgUnameComponent]
})
export class ComponentsModule {}
