import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer/customer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  money= 7.10;
  @Input() customer:Customer;
  constructor() { }

  ngOnInit(): void {
  }

}
