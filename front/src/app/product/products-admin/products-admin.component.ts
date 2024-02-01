import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {
  productsList: any = []
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productsList = this.productService.getProduct()
    console.log(this.productsList)
  }

}
