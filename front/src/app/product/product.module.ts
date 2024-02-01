import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsAdminComponent} from "./products-admin/products-admin.component"
import {ProductsComponent} from "./products/products.component"
import { DataViewModule } from "primeng/dataview"; 
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [ProductsAdminComponent, ProductsComponent ],
  imports: [
    CommonModule,
    DataViewModule,
    RatingModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    TableModule
  ],
})
export class ProductModule { }
