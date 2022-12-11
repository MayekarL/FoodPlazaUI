import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-food-by-category',
  templateUrl: './view-food-by-category.component.html',
  styleUrls: ['./view-food-by-category.component.css']
})
export class ViewFoodByCategoryComponent implements OnInit {

  public category:any={
    categoryId:0,
    categoryName:''
  }
  public foodList:any=[];

  public food: any = {
    foodId: 0,
    name: "",
    price: 0,
    ratings: 0, // Divide by 10
    type: "",
    categories: {
    }
  }

  public cartRequest: any = {
    userEmailId: "",
    foodId: 0,
    quantity: 0,
    isOrderDone: "N"
  }

  constructor(private route:ActivatedRoute, 
    private foodService:FoodService,
    private snack:MatSnackBar,
    private router:Router,
    private cartService:CartService,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.category.categoryId =  this.route.snapshot.params['categoryId'];

    this.foodService.getFoodByCategories(this.category).subscribe(
      (data:any)=>{
        console.log(data);
        this.foodList = data.foodDtoList;
        console.log(this.foodList);
      },(error:any)=>{
        this.snack.open("Something Went Wrong !","OK");
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
