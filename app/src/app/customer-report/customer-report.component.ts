import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../models/customer';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrl: './customer-report.component.css'
})
export class CustomerReportComponent implements OnInit{

  constructor( private custService:CustomerService){}

  customers:Customer[]=[];

  ngOnInit(): void {
    this.customers = this.custService.get();
  }


  
}
