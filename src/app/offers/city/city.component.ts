import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { customer } from 'src/app/customer.model';
import { CityService } from 'src/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  myControl = new FormControl();
  options: string[];
  registerForm: FormGroup;
  filteredOptions: Observable<any[]>;

  ngOnInit(): void {
  }
  constructor(private  cityService:CityService ){ 
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val || '')
          }) 
    )
  }

  filter(val: string): Observable<any[]> {
    return this.cityService.getData()
     .pipe(
       map(response => response.filter(option => { 
         return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
      }

      public customer:customer= {

        fullname:'',
        number:'',
        email:'',
        city:''
    
      }

}
