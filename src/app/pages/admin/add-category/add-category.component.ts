import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService,private router:Router) { }

  public category:any={
    categoryName:""
  }

  ngOnInit(): void {
  }

  addCategory(){
    this.categoryService.createCategory(this.category).subscribe(
      (data:any)=>{
        Swal.fire("Added",this.category.categoryName +" Category Added Successfully!","success");
        this.router.navigate(['/admin/view-category']);
      },(error:any)=>{

      }
    )
  }

}
