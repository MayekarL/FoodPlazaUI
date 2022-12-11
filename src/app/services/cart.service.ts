import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  //Create Cart 
  public createCart(cart:any){
    return this.http.post(`${baseUrl}/cart/create`,cart);
  }

  //Fetch Cart
  public fetchCart(userEmailId:number){
    return this.http.get(`${baseUrl}/cart/get/${userEmailId}`);
  }

  //Delete Cart 
  public deleteCart(id:number){
    console.log("Cart ID to be deleted :"+id);
    return this.http.delete(`${baseUrl}/cart/delete/${id}`);
  }
}
