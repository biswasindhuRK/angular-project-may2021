import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Product Management System By Biswasindhu Mandal";

  // add few demo product list
  productList = [
    {
      id: 1234,
      product_name: "Maaza Mango",
      company: "The CocaCola Company",
      quentity: "1.2L",
      price: 65,
      mfg_date: "Jan-2021",
      exp_date: "June-2021"
    },
    {
      id: 15678,
      product_name: "Sprite",
      company: "The CocaCola Company",
      quentity: "1L",
      price: 50,
      mfg_date: "Feb-2021",
      exp_date: "Sep-2021"
    },
    {
      id: 16789,
      product_name: "Mineral Water",
      company: "Bisleri",
      quentity: "2L",
      price: 30,
      mfg_date: "Jan-2021",
      exp_date: "Mar-2021"
    }
  ];

  constructor() {
    // save dammy data into localStorage
    localStorage.setItem('products', JSON.stringify(this.productList));
  }
}
