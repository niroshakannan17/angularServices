import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers:Customer[]=[];

  add(custmerNmae:string){

    const customer = new Customer();
    customer.name = custmerNmae;
    this.customers.push(customer);
    
    console.log(this.customers);

  }

  get(){
    return this.customers;
  }
}
