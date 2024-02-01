import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  getProduct() {
    const productList = require('C:/Users/mbln/Documents/Alten test technique/alten-shop-front-products/front/src/assets/products.json').data;
    return productList
  }
}
