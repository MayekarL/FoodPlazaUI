import { Component, OnInit } from '@angular/core';
import { DiscountService } from 'src/app/services/discount.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-discount',
  templateUrl: './view-discount.component.html',
  styleUrls: ['./view-discount.component.css']
})
export class ViewDiscountComponent implements OnInit {

  public discount:any=[];

  constructor(private discountService:DiscountService) { }

  ngOnInit(): void {
  this.discountService.fetchAllDiscounts().subscribe(
    (data:any)=>{
      this.discount = data.discountList;
    },(error:any)=>{

    }
  )
  }



}
