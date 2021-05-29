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
      id: 1,
      product_name: "maaza mango",
      company: "The CocaCola Company",
      quentity: "1.2L",
      price: 65,
      mfg_date: "1-2021",
      exp_date: "6-2021"
    },
    {
      id: 1,
      product_name: "Sprite",
      company: "The CocaCola Company",
      quentity: "1L",
      price: 50,
      mfg_date: "2-2021",
      exp_date: "9-2021"
    },
    {
      id: 1,
      product_name: "Mineral Water",
      company: "Bisleri",
      quentity: "2L",
      price: 30,
      mfg_date: "1-2021",
      exp_date: "3-2021"
    }
  ];

  constructor() {
    // save dammy data into localStorage
    localStorage.setItem('products', JSON.stringify(this.productList));
  }
}
