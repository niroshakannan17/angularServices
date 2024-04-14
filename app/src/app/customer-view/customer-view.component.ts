import { Component } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent {

  customers:Customer[]=[
    {name:'ht'},
    {name:'yu'}
  ];
}
