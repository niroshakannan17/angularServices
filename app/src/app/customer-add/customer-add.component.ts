import { Component } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {

  customers:Customer[]=[];

  addCustomer(custmerNmae:string){

    const customer = new Customer();
    customer.name = custmerNmae;
    this.customers.push(customer);
    
    console.log(this.customers);

  }

}
