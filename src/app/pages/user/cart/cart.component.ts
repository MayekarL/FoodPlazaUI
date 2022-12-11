import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { CartService } from 'src/app/services/cart.service';
import { DiscountService } from 'src/app/services/discount.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { ViewDiscountComponent } from '../../admin/view-discount/view-discount.component';
import { DiscountforuserComponent } from '../discountforuser/discountforuser.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
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
  public totalPrice: number = 0;
  public cartId: number = 0;
  public foodId: number = 0;
  public quantity: any = 0;
public discountAmount:number = 0;
public discount:any=[];
  public bill: any = {
    billId: 0,
    userEmailId: "",
    totalPrice: "",
    billDate: "",
    cartList: this.cart
  }

  public cartRequest: any = {
    userEmailId: "",
    foodId: 0,
    quantity: 0,
    isOrderDone: "N"
  }

  constructor(
    private cartService: CartService,
    private router: Router,
    private snack: MatSnackBar,
    private billService: BillService,
    private loginService: LoginService,
    private discountService: DiscountService,
    public dialog: MatDialog,
) { }

  ngOnInit(): void {
    this.user = this.loginService.getUserData();
    console.log(this.user);
    this.fetchCart();
    this.fetchDiscounts()
  }


  fetchCart() {
    this.cartService.fetchCart(this.user.emailId).subscribe(
      (data: any) => {
        console.log("Success :: ", data);
        this.cart = data.cartList;
        this.totalPrice = data.totalPrice;
      }, (error: any) => {
        this.snack.open("Something Went Wrong !","OKAY!");
      }
    )
  }

  increaseQuantity(foodId: any, quantity: any) {
    console.log("Food ID : " + foodId);
    console.log("Quantity : " + quantity);
    quantity++;
    this.cartRequest.quantity = quantity;
    this.cartRequest.foodId = foodId;
    this.cartRequest.userEmailId = this.user.emailId;
    console.log(this.cartRequest);
    this.createUpdateCart(this.cartRequest);
  }

  //Check if cart is empty or not
  isEmpty() {
    return this.cart.length == 0;
  }

  decreaseQuantity(foodId: any, quantity: any, cartId: any) {
    console.log("Food ID : " + foodId);
    console.log("Quantity : " + quantity);
    if (quantity <= 1) {
      this.deleteFoodFromCart(cartId);
    } else if (quantity > 0) {
      quantity--;
    }

    this.cartRequest.quantity = quantity;
    this.cartRequest.foodId = foodId;
    this.cartRequest.userEmailId = this.user.emailId;
    console.log(this.cartRequest);
    this.createUpdateCart(this.cartRequest);
  }


  createUpdateCart(cartRequest: any) {
    this.cartService.createCart(cartRequest).subscribe(
      (data: any) => {
        if (data.message == "SUCCESS") {
          this.fetchCart();
        
        }
      }, (error: any) => {

      },
    )
  }


  generateBill() {
    this.bill.userEmailId = this.user.emailId;
    this.bill.totalPrice = this.totalPrice;
    this.bill.cartList = this.cart;
    console.log(this.bill);
    if(this.discountAmount > 0 ){
      this.bill.totalPrice -= this.discountAmount;
    }

    this.billService.generateBill(this.bill).subscribe(
      (data: any) => {
        Swal.fire("Success", "Congrats You have Purchased", "success");
        this.router.navigate(['/user/bill/' + data.billDtoList[0].billId]);
      }, (error: any) => {
        this.snack.open("Something Went Wrong !", "OK");
      },
    )
  }


  deleteFoodFromCart(cartId: number) {
    console.log(cartId);
    Swal.fire({
      icon: 'question',
      title: 'Are you Sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteCart(cartId).subscribe(
          (data) => {
            Swal.fire("Success", "SuccessFully Deleted", "success");
            this.fetchCart();
          }, (error) => {
            Swal.fire("Error", "Something Went Wrong !", "error");
          }
        )
      }
    })
  }

  applyDiscount() {
    console.log(this.discountAmount);
  

    console.log("Promo Value : "+this.discount.promoValue);
    console.log("this.discount.minAmount"+this.discount.minAmount);
    console.log("this.totalPrice"+this.totalPrice);
    console.log("this.discount.promoValue / 100"+ this.discount.promoValue / 100);

    // if(this.discount.minAmount <= this.totalPrice){
      this.discountAmount = this.totalPrice * (this.discount.promoValue / 100);
      console.log(this.discountAmount);
      this.fetchCart();
    // }else{
      
    // }
  

  }

  fetchDiscounts() {
    this.discountService.fetchAllDiscounts().subscribe(
      (data: any) => {
        this.discount = data.discountList;

      }, (error: any) => {

      }
    )
  }
}
