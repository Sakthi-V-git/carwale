import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/services/customer.service';
import { customer } from '../customer.model';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerInfo:string="none";
  constructor( public userDetails :CustomerService) { 
  }
  ngOnInit(): void {
  }
  customerDetails(){
    this.customerInfo="block";
  }
  displayedColumns: string[] = ['fullname', 'number', 'email', 'city'];
}
