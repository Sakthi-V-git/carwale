import { Injectable } from '@angular/core';
import { customer } from 'src/app/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customer: customer[] = [{ fullname: "",number:"", email:"",city: "" }];
  constructor() { }
  public addUser(user: customer) {
    this.customer.push({...user});
  }

}
