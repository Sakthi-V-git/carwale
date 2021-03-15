import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { customer } from 'src/app/customer.model';
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  myControl = new FormControl();
  @ViewChild('myForm') customerDetails:NgForm;
  constructor(private userDetails :CustomerService) { }

  ngOnInit(): void {
  }
  public customer:customer= {
    id:0,
    fullname:'',
    number:'',
    email:'',
    city:''

  }
  onSubmit(data:FormData){
    console.log(data);
    this.userDetails.addUser(this.customer);
  }

}
