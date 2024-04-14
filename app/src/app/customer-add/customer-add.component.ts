import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {

  constructor(private custService:CustomerService ){}

  addCustomer(custmerNmae:string){

    this.custService.add(custmerNmae);

  }

}
