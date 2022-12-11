import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  hide = true;

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
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.user = this.login.getUserData();
    this.user.createDate = this.login.changeDateFormat(this.user.createDate);
    console.log(this.login.changeDateFormat(this.user.createDate));
  }

  updateUser() {

    this.userService.updateUser(this.user).subscribe(
      (data: any) => {
        Swal.fire("Updated","Your Profile is up to Date now!","success");
        this.login.storeDataInLocaleStorage(data.userDto);
        if (data.userDto.role == "NORMAL") {
          this.router.navigate(['user/dashboard']);
        }
         else if (data.userDto.role == "ADMIN") {
          this.router.navigate(['admin/dashboard']);
        }
        this.router.navigate(['user/profile']);
      }, (error: any) => {

      }
    )
  }
}
