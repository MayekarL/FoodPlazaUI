import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  public categories:any=[];
  // public categories:any ={
  //   categoryId:"",
  //   categoryName:""
  // };

  constructor(
    private foodService:FoodService,
    private categoryService:CategoryService,
    private snack:MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data:any)=>{
        console.log(data);
        this.categories = data.categoryList;
      },(error:any)=>{

      }
    )
  }
  foodByCategory(categoryId:number){    
    this.router.navigate(['user/viewfoodbycategory/'+categoryId]);
  }
}
