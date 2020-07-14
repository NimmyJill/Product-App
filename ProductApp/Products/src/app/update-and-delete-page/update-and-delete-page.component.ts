import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../product-list/product.model';
import {ProductService} from '../product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-update-and-delete-page',
  templateUrl: './update-and-delete-page.component.html',
  styleUrls: ['./update-and-delete-page.component.css']
})
export class UpdateAndDeletePageComponent implements OnInit {
  title:String="Update/Delete";

  //Product is the model class for a product item
  products: ProductModel[];

  //image properties
  imageWidth:number = 50;
  imageMargin: number=2;

  showImage:boolean = false;

  //delete function
  deleteProduct(id){
    console.log("deleted" + id);
    this.productService.deleteProduct(id);
    alert("Product Deleted");
    this.router.navigate(['/']);
  }

  //creating service object for calling getProducts()
  constructor(private productService: ProductService, private router: Router) {
    
   }

 
  ngOnInit(): void {
    //calling getProducts() and loading the products to products array
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}
