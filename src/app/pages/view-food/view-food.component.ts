import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.css']
})
export class ViewFoodComponent implements OnInit {

  public cartRequest: any = {
    userEmailId: "",
    foodId: 0,
    quantity: 0,
    isOrderDone: "N"
  }

  public food: any = {
    foodId: 0,
    name: "",
    price: 0,
    ratings: 0, // Divide by 10
    type: "",
    categories: {

    }
  }
  constructor(private foodService: FoodService,private cartService:CartService,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
     this.foodService.getAllFoods().subscribe(
      (data:any)=>{
        console.log(data);
        this.food = data.foodDtoList;
      },(error:any)=>{

      }
    )
  }


  cart(foodId:number){
    this.cartRequest.foodId=foodId;
    this.cartRequest.quantity=1;
    this.cartRequest.userEmailId = this.loginService.getUserData().emailId;
    console.log("Creating cart for the first Time : "+this.cartRequest);
    
    this.cartService.createCart(this.cartRequest).subscribe(
      (data:any)=>{
        this.router.navigate(['/user/cart']);
      },(error:any)=>{

      }
    )
    console.log("Cart!!!");
  
  }
}
