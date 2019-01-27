import { Component } from '@angular/core';
import { SenderProvider} from '../../providers/sender/sender';

/**
 * Generated class for the LgUnameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lgu-name',
  templateUrl: 'lgu-name.html'
})
export class LguNameComponent {

  text: string;

  constructor(public sender:SenderProvider) {
    console.log('Hello LgUnameComponent Component');
    this.text = 'Hello World';
  }

}
