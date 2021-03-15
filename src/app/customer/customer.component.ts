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
  customer:Array<customer>;
  constructor(public activatedRoute:ActivatedRoute, private userDetails :CustomerService) { 
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:Array<customer>)=>{this.customer=data})
  }
 debugger
  displayedColumns: string[] = ['fullname', 'number', 'email', 'city'];
}
