import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProductsData: any;
  constructor(public _productService: ProductService) {
  }

  // Call product list function at page load time
  ngOnInit(): void {
    this.getProductList();
  }

  // Get all product list from services
  getProductList() {
    this.allProductsData = this._productService.getAllProductsList().data;
  }
}
