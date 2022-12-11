import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-admin-view-food',
  templateUrl: './admin-view-food.component.html',
  styleUrls: ['./admin-view-food.component.css']
})
export class AdminViewFoodComponent implements OnInit {
  public food: any = {
    foodId: 0,
    name: "",
    price: 0,
    ratings: 0, // Divide by 10
    type: "",
    categories: {

    }
  }


  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getAllFoods().subscribe(
      (data:any)=>{
        console.log(data);
        this.food = data.foodDtoList;
      },(error:any)=>{

      }
    )
  }

  //Edit food 
  editFood(foodId:number){
    console.log(foodId)
  }

  //Delete Food 
  deleteFood(foodId:number){
    console.log(foodId)
  }
}
