import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  id: number = 0;

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

  public cart: any = [];

  public bill: any = {
    billId: 0,
    userEmailId: "",
    totalPrice: "",
    billDate: "",
    cartList: ""
  }

  constructor(private route: ActivatedRoute,
    private billService: BillService,
    private snack: MatSnackBar,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['billId'];
    this.user = this.loginService.getUserData();
    console.log(this.user);

    this.billService.getBillById(this.id, this.user.emailId).subscribe(
      (data: any) => {
        this.bill = data.billDtoList[0];
        this.cart = data.billDtoList[0].cartList;
      }, (error: any) => {
        this.snack.open("You have no bill avaialble on this bill ID !", "OK");
        this.bill.billId = 0;
      }
    )


  }

}
