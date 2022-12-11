import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountService } from 'src/app/services/discount.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css']
})
export class AddDiscountComponent implements OnInit {

  public discount: any = {
    promoCode: "",
    promoValue: 0,
    promoType:"",
    minAmount: 0,
    createdBy: "",
  }

  constructor(
    private loginService: LoginService,
    private discountService: DiscountService,
    private router:Router
  ) { }

  ngOnInit(): void {
   
  }

  addDiscount() {
    let userData = this.loginService.getUserData();
    this.discount.createdBy = userData.emailId;
    console.log(this.discount);
    this.discountService.createDiscount(this.discount).subscribe(
      (data: any) => {
        Swal.fire("Success", "Discount Added Successfully!", "success");
        this.router.navigate(['/admin/view-discount']);
      },
      (error: any) => {
        Swal.fire("Error", "Something Went Wrong :" + error.message, "error");
      }
    )

  }

}
