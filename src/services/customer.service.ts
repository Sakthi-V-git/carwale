import { Injectable } from '@angular/core';
import { customer } from 'src/app/customer.model';
import { Customer } from 'src/app/customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customer: Customer[] = [];
  public count = 1;
  constructor() { }
  public addUser(user: customer) {
    this.customer.push({...user, id: this.count++});
  }

}
