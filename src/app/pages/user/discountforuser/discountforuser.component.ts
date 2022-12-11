import { Component, OnInit } from '@angular/core';
import { DiscountService } from 'src/app/services/discount.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-discountforuser',
  templateUrl: './discountforuser.component.html',
  styleUrls: ['./discountforuser.component.css']
})
export class DiscountforuserComponent implements OnInit {
  public discount:any=[];

  constructor(
    private discountService:DiscountService, 
    ) { }

  ngOnInit(): void {
    this.fetchDiscounts();
  }

  fetchDiscounts() {
    this.discountService.fetchAllDiscounts().subscribe(
      (data: any) => {
        this.discount = data.discountList;

      }, (error: any) => {

      }
    )
  }
  addDiscount(discountAmount:any){
    localStorage.setItem("discountAmount",discountAmount);
    Swal.fire("Success","Promo code Added Successfully!","success");
  }
  
}
