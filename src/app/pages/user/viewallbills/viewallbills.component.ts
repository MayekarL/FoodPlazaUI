import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-viewallbills',
  templateUrl: './viewallbills.component.html',
  styleUrls: ['./viewallbills.component.css']
})
export class ViewallbillsComponent implements OnInit {
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
  public bill:any=[];
  public cart:any=[];
  constructor(
    private loginService: LoginService,
    private router:Router,
    private billService:BillService
    ) { }
 
  ngOnInit(): void {
    this.user = this.loginService.getUserData();
    
    this.billService.getBillByUserName(this.user.emailId).subscribe(
      (data:any)=>{
        this.bill = data.billDtoList;
      },
    )
  }


  showBill(billId:number){
    console.log(billId);
    this.router.navigate(['/user/bill/'+billId]);
  }

}
