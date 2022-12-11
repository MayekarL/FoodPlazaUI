import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http:HttpClient) { }

  public sendOtp(user:any){
    return this.http.post(`${baseUrl}/otp/send`,user);
  }

  public verifyOtp(otpNumber:number,emailId:String){
    return this.http.get(`${baseUrl}/otp/verify/${emailId}/${otpNumber}`);
  }

  public changePassword(changePassword:any){
    return this.http.put(`${baseUrl}/login/change-password`,changePassword);
  }
}
