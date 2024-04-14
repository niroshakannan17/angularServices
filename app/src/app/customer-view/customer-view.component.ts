import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../service/customer.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent implements OnInit {

  constructor(private custService:CustomerService){}
  customers:Customer[]=[];

  ngOnInit(): void {
    this.customers = this.custService.get();
  }

  
}
