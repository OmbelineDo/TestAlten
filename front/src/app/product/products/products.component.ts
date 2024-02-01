import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList: any = []
  sortField: string;
  sortOrder: number;
  sortKey: string;
  sortOptions: SelectItem[];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productsList = this.productService.getProduct()
    console.log(this.productsList)
    this.sortOptions = [
      {label: 'Statut inventaire', value: '!quantity'},
      {label: 'Note', value: '!rating'}
  ];

  
  }
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
