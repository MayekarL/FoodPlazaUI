import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http:HttpClient
  ) { }

  public createFood(food:any){
    return this.http.post(`${baseUrl}/food/create`,food);
  }

  public getAllFoods(){
    return this.http.get(`${baseUrl}/food/all-foods`);
  }

  public getFoodByCategories(category:any){
    return this.http.post(`${baseUrl}/food/category`,category);
  }
  

}
