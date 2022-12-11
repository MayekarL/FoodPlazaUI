import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  public categoriesList:any= {
    categoryId:0,
    categoryName:""
  };

  constructor(
    private foodService: FoodService,
    private categoryService:CategoryService
    ) { }

  public food: any = {

    name:"",
    price:0,
    type:"",
    categories:{
      categoryId:0,
      categoryName:""
    }
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data:any)=>{
        this.categoriesList = data.categoryList;
        console.log(data);
      },(error:any)=>{

      }
    )
  }

  addFood(){
    this.foodService.createFood(this.food).subscribe(
      (data:any)=>{
        console.log(this.food);
        Swal.fire("Success","Food Added Successfully","success");
      },(error:any)=>{
        console.log(error);
      }
    )
  }

}
