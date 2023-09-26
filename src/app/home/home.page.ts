import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  aboutTitle = 'E-commerce (electronic commerce) is the buying and selling of goods and services,  or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C),consumer-to-consumer or consumer-to-business'
  constructor() {}
  public alertButtons = ['Cancel','Submit'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Email',
      attributes: {
        maxlength: 80,
      },
    },
    {
      type: 'number',
      placeholder: 'Phone',
      min: 1,
      max: 100,
    },
    {
      placeholder: 'Address',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Description',
    },
  ];
}
