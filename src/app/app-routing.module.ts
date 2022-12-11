import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { NormalGuard } from './normal.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddFoodComponent } from './pages/admin/add-food/add-food.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminViewCategoriesComponent } from './pages/admin/admin-view-categories/admin-view-categories.component';
import { AdminViewFoodComponent } from './pages/admin/admin-view-food/admin-view-food.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OtpComponent } from './pages/otp/otp.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ViewCategoryComponent } from './pages/view-category/view-category.component';
import { ViewFoodByCategoryComponent } from './pages/view-food-by-category/view-food-by-category.component';
import { ViewFoodComponent } from './pages/view-food/view-food.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { BillComponent } from './pages/user/bill/bill.component';
import { ViewallbillsComponent } from './pages/user/viewallbills/viewallbills.component';
import { AddDiscountComponent } from './pages/admin/add-discount/add-discount.component';
import { ViewDiscountComponent } from './pages/admin/view-discount/view-discount.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  
   
  {
    path: 'user',
    component: UserDashboardComponent,
    
    children: [
      {
        path: 'dashboard',
        component:WelcomeComponent,
      },
      {
        path:"otp",
        component:OtpComponent,
      
      },
      {
        path:"profile",
        component:ProfileComponent,
      
      }, 
      {
        path:"view-food",
        component:ViewFoodComponent,
        
      }, 
      {
        path:"view-category",
        component:ViewCategoryComponent,
        
      },
      {
        path:"viewfoodbycategory/:categoryId",
        component:ViewFoodByCategoryComponent,
      }, 
      {
        path:"cart",
        component:CartComponent,
      }, 
      {
        path:"bill/:billId",
        component:BillComponent,
      },  {
        path:"view-all-bills",
        component:ViewallbillsComponent,
      }, 
      {
        path:"edit-profile",
        component:EditProfileComponent,  
      },
      
    ],
    canActivate:[NormalGuard],
  },
    {
      path: 'admin',
      component: AdminHomeComponent,
      
      children: [
        {
          path: 'dashboard',
          component:AdminDashboardComponent ,
        },
        {
          path:"profile",
          component:ProfileComponent,
        
        },
        {
          path:"otp",
          component:OtpComponent,        
        },
        {
          path:"add-food",
          component:AddFoodComponent,        
        },
        {
          path:"add-category",
          component:AddCategoryComponent,        
        },
        {
          path:"view-category",
          component:AdminViewCategoriesComponent,  
        },
        {
          path:"view-food",
          component:AdminViewFoodComponent,  
        },        
        {
          path:"add-discount",
          component:AddDiscountComponent,  
        },
        {
          path:"view-discount",
          component:ViewDiscountComponent,  
        },
        {
          path:"edit-profile",
          component:EditProfileComponent,  
        },
        
      ],
      canActivate:[AdminGuard],
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
