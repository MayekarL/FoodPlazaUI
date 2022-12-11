import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private router:Router) { }

  public user: any = {
    emailId: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    age: 0,
    gender: '',
    mobileNo: '',
    password: ''

  }

  ngOnInit(): void {
  
  }

  isLoggedIn(){
    let isLogged = this.loginService.isLoggedIn();
    if(isLogged == true) {
      this.getData();
    }
    return isLogged;
  }
  logout(){
    let value = this.loginService.logout();
    this.router.navigate(['login']);
    return value;
  }

  getData(){
    this.user = this.loginService.getUserData();
  }

  profile(){
    if(this.loginService.getUserRole() == "NORMAL"){
      this.router.navigate(['user/profile']);
    }else if(this.loginService.getUserRole() == "ADMIN"){
      this.router.navigate(['admin/profile']);
    }

  }
}
