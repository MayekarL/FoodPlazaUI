import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public verifyCredentials(login: any) {
    return this.http.post(`${baseUrl}/login/verify`, login);
  }

  //Store data in local storage
  public storeDataInLocaleStorage(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  //Check if logged in 
  public isLoggedIn() {
    var user = localStorage.getItem("user");
    return (user != null) ? true : false;
  }

  public logout() {
    localStorage.removeItem("user");
    return true;
  }

  public getUserData():any {
    let data:any = localStorage.getItem("user");
    return (this.isLoggedIn()) ?
      JSON.parse(data) : null;
  }

  public getUserRole():any{
    let data:any =this.getUserData();    
    return data.role;
  }

  public changeDateFormat(date:any){
    date = date.substr(0, 10);
    console.log(date);
    const dateArr: string[]=date.split("-");
    console.log(dateArr);
    return dateArr[2] + "-"+dateArr[1] + "-"+dateArr[0]; 
  }
}
