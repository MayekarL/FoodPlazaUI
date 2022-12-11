import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { OtpService } from 'src/app/services/otp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otp: any = "";
  sendOtpClick = true;
  submitOtpClick = false;
  changePassword = false;

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

  public changePasswordRequest:any = {
    emailId: '',
    newPassword:''
  }

  constructor(
    private loginService: LoginService,
    private otpService: OtpService,
    private snack: MatSnackBar,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.user = this.loginService.getUserData();
  }

  sendOtp() {
    this.otpService.sendOtp(this.user).subscribe(
      (data: any) => {
        if (data.message == "SUCCESS") {
          this.sendOtpClick = false;
          this.submitOtpClick = true;
          this.changePassword = false;

          Swal.fire("Success", "An Otp Has been Sent To Your Mail!", "success");
        }
      }, (error: any) => {
        Swal.fire("Error", error.message, "error");
      }
    )
  }

  verifyOTP() {
  
    console.log(this.otp);
    this.otpService.verifyOtp(this.otp, this.user.emailId).subscribe(
      (data: any) => {
        console.log(data);
        console.log(data.message == "ERROR")
        if (data.message == "CORRECT_OTP") {
          this.sendOtpClick = false;
          this.submitOtpClick = false;
          this.changePassword = true;
          Swal.fire("Success", "Correct OTP", "success");
        } else if (data.message == "WRONG_OTP") {
          this.snack.open("Wrong OTP", "OK");
          this.sendOtpClick = false;
          this.submitOtpClick = true;
          this.changePassword = false;
        }

      }, (error: any) => {
        Swal.fire("Error", "Something went Wrong", "error");
      }
    )
  }

  changePasswordCall(){

    this.changePasswordRequest.emailId = this.user.emailId;
    console.log(this.changePasswordRequest);

    this.otpService.changePassword(this.changePasswordRequest).subscribe(
      (data:any)=>{
        Swal.fire("Success", "Password Changed Successfully!", "success");
        this.router.navigate(['/user/dashboard']);
      },(error:any)=>{
        this.snack.open("Something Went Wrong !","OK");
      }
    )

  }

}
