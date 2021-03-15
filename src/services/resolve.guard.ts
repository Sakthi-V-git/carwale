import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any>{

  constructor(private userDetails :CustomerService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userDetails.customer;
  }
  
}
