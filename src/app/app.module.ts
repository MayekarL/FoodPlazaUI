import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './pages/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { OtpComponent } from './pages/otp/otp.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ViewFoodComponent } from './pages/view-food/view-food.component';
import { ViewCategoryComponent } from './pages/view-category/view-category.component';
import { ViewFoodByCategoryComponent } from './pages/view-food-by-category/view-food-by-category.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminSidebarComponent } from './pages/admin/admin-sidebar/admin-sidebar.component';
import { AddFoodComponent } from './pages/admin/add-food/add-food.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AdminViewCategoriesComponent } from './pages/admin/admin-view-categories/admin-view-categories.component';
import { AdminViewFoodComponent } from './pages/admin/admin-view-food/admin-view-food.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { BillComponent } from './pages/user/bill/bill.component';
import { ViewallbillsComponent } from './pages/user/viewallbills/viewallbills.component';
import { AddDiscountComponent } from './pages/admin/add-discount/add-discount.component';
import { ViewDiscountComponent } from './pages/admin/view-discount/view-discount.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DiscountforuserComponent } from './pages/user/discountforuser/discountforuser.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    OtpComponent,
    WelcomeComponent,
    ViewFoodComponent,
    ViewCategoryComponent,
    ViewFoodByCategoryComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    AddFoodComponent,
    AddCategoryComponent,
    AdminViewCategoriesComponent,
    AdminViewFoodComponent,
    CartComponent,
    BillComponent,
    ViewallbillsComponent,
    AddDiscountComponent,
    ViewDiscountComponent,
    DiscountforuserComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule, 
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
