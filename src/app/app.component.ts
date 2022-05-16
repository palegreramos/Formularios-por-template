import { Component } from '@angular/core';
import {Wine} from './wine';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public wine: Wine;
  public message: string = '';

  constructor() { }

  createWine(wineForm) {
    if (wineForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      this.message = '';
      this.wine = wineForm.value.wine;
      console.log('Creating wine', this.wine);
    }
  }
}
