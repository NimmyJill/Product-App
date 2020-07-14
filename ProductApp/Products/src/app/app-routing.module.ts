import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateAndDeletePageComponent } from './update-and-delete-page/update-and-delete-page.component';
import {UpdateComponent} from './update/update.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [{path:'', component:ProductListComponent},
                        {path:'add', component:NewProductComponent},
                        {path:'edit', component:UpdateAndDeletePageComponent},
                        {path:'update/:id', component:UpdateComponent},
                        {path:'signup', component:SignupComponent},
                        {path:'login', component:LoginComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
