import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchAll } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;

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

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }


  register() {
    if (this.validations()) {
      this.userService.createUser(this.user).subscribe(
        (data: any) => {
          console.log(data);
          this.snack.open(`Congrats ${data.userDto.firstName} ${data.userDto.lastName}`, "OK");
        }, (error: any) => {

        }
      )
    }
  }

  validations(): boolean {
    if(this.user.emailId.trim() == null || this.user.emailId.trim() == ""){
      this.snack.open("Please Enter your Email Id!","OK");
      return false;
    }
    if(this.user.firstName.trim() == null || this.user.firstName.trim() == ""){
      this.snack.open("Please Enter your First Name!","OK");
      return false;
    }
    if(this.user.lastName.trim() == null || this.user.lastName.trim() == ""){
      this.snack.open("Please Enter your Last Name!","OK");
      return false;
    }
    if(this.user.password.trim() == null || this.user.password.trim() == ""){
      this.snack.open("Please Enter your Password!","OK");
      return false;
    }
    
    if(this.user.mobileNo.length != 10){
      this.snack.open("Please Enter 10 Digit Mobile No!","OK");
      return false;
    }

    if(this.user.age == null || this.user.age <= 0){
      this.snack.open("Please Enter your Age!","OK");
      return false;
    }
    
   return true;
  }
}
