import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http:HttpClient) { }

  public createDiscount(discount:any){
    return this.http.post(`${baseUrl}/discount/create`,discount);
  }

  public fetchAllDiscounts(){
    return this.http.get(`${baseUrl}/discount/all-discounts`);
  }
}
