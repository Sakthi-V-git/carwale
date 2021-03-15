import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(public httpClient:HttpClient) {}

  getLocation(data : string){
    const httpParams = new HttpParams({
      fromObject:{
        term : data,
        record : "5",
        sourceId : "1",
      }
    });
    return this.httpClient.get("https://www.carwale.com/api/v2/autocomplete/city/",{params :httpParams})
}
}
