import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-admin-view-categories',
  templateUrl: './admin-view-categories.component.html',
  styleUrls: ['./admin-view-categories.component.css']
})
export class AdminViewCategoriesComponent implements OnInit {

  public categories:any=[];

  constructor( private foodService:FoodService,
    private categoryService:CategoryService,
    private snack:MatSnackBar,
    private router:Router) { }

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
    this.router.navigate(['admin/viewfoodbycategory/'+categoryId]);
  }

}
