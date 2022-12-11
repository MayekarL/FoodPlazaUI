import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: any = {
    emailId: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    age: 0,
    gender: '',
    mobileNo: '',
    password: '',
    createDate: ''
  }

  constructor(
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.login.getUserData();
    this.user.createDate = this.login.changeDateFormat(this.user.createDate);
    console.log(this.login.changeDateFormat(this.user.createDate));
  }

  editProfile() {
    this.router.navigate(['user/edit-profile']);

  }
}
