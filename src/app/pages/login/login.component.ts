import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  public loginRquest: any = {
    emailId: "",
    password: ""
  }
  constructor(
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.checkValidation()) {
      this.loginService.verifyCredentials(this.loginRquest).subscribe(
        (data: any) => {
          console.log("Success :: ", data);
          console.log(data.message == "LOGIN_SUCCESS");

          if (data.message == "LOGIN_SUCCESS") {
            this.loginService.storeDataInLocaleStorage(data.userDto);
            if (data.userDto.role == "NORMAL") {
              this.router.navigate(['user/dashboard']);
            }
             else if (data.userDto.role == "ADMIN") {
              this.router.navigate(['admin/dashboard']);
            }
          } else if (data.message == "INVALID_PASSWORD") {
            this.snack.open("Invalid Username/Pasword", "OK");
          }
        }, (error: any) => {
          console.log("Error :", error)
          this.snack.open(`${error.message}`, "OK")
        }
      )
    }
  }

  checkValidation() {
    if (this.loginRquest.emailId == '' || this.loginRquest.emailId == null) {
      this.snack.open("Please Enter Your Username", "OK");
      return false;
    }
    if (this.loginRquest.password == '' || this.loginRquest.password == null) {
      this.snack.open("Please Enter Your Password", "OK");
      return false;
    }
    return true;
  }
}
