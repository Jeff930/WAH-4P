import { Component } from '@angular/core';

/**
 * Generated class for the LgUnameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lg-uname',
  templateUrl: 'lg-uname.html'
})
export class LgUnameComponent {

  text: string;

  constructor() {
    console.log('Hello LgUnameComponent Component');
    this.text = 'Hello World';
  }

}
