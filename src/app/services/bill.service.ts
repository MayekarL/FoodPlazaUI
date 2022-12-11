import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  //Create Bill
  public generateBill(bill: any) {
    return this.http.post(`${baseUrl}/bill/generate`, bill);
  }

  public getBillById(id: number, userId: string) {
    return this.http.get(`${baseUrl}/bill/get/${userId}/${id}`);
  }

  public getBillByUserName(userId: string) {
    return this.http.get(`${baseUrl}/bill/get/${userId}`);
  }
}
