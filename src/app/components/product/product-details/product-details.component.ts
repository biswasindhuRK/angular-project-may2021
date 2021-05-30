import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  pid: string;
  constructor(private _productService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.pid = '';
    this.route.params.subscribe((params: any) => {
      this.pid = params.id ? params.id : '';

      if (this.pid)
        this.editProductDetails(this.pid);
      else
        console.error('Invalid Params');
    });
  }

  ngOnInit(): void {
  }

  // Edit Product Details
  editProductDetails(_pid: string) {
    this.productDetails = this._productService.getSpecificProductDetails(_pid).data;
    if (!Object.keys(this.productDetails).length) {
      alert('invalid product id');
    }
  }
}
