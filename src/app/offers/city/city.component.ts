import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { customer } from 'src/app/customer.model';
import { Customer } from 'src/app/customer/customer.model';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  myControl = new FormControl();
  options: any=[];
  userinput:string ="";

  ngOnInit(): void {
  }
  constructor(private  cityService:CityService ){ 
   
  }

  getCity(data:string){
    this.cityService.getLocation(data).subscribe(city=> this.options = city)
  }
  
      public customer:Customer= {
        id: 0,
        fullname:'',
        number:'',
        email:'',
        city:''
    
      }

}
