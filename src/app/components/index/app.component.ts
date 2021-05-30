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
      exp_date: "June-2021",
      total_item: 123
    },
    {
      id: 12345,
      product_name: "Maaza Mango",
      company: "The CocaCola Company",
      quentity: "2L",
      price: 90,
      mfg_date: "Jan-2021",
      exp_date: "June-2021",
      total_item: 123
    },
    {
      id: 5678,
      product_name: "Sprite",
      company: "The CocaCola Company",
      quentity: "1L",
      price: 50,
      mfg_date: "Feb-2021",
      exp_date: "Sep-2021",
      total_item: 100
    },
    {
      id: 1357,
      product_name: "Mineral Water",
      company: "Bisleri",
      quentity: "2L",
      price: 40,
      mfg_date: "Jan-2021",
      exp_date: "Mar-2021",
      total_item: 40
    },
    {
      id: 2468,
      product_name: "Mineral Water",
      company: "Bisleri",
      quentity: "1L",
      price: 20,
      mfg_date: "Jan-2021",
      exp_date: "Mar-2021",
      total_item: 140
    },
    {
      id: 123456,
      product_name: "Thumps Up",
      company: "The CocaCola Company",
      quentity: "1L",
      price: 50,
      mfg_date: "Jan-2021",
      exp_date: "Oct-2021",
      total_item: 45
    },
    {
      id: 22345,
      product_name: "7 Up",
      company: "Keurig Dr Pepper",
      quentity: "2.25L",
      price: 90,
      mfg_date: "Feb-2021",
      exp_date: "Oct-2021",
      total_item: 45
    }
  ];

  constructor() {
    // save dammy data into localStorage
    localStorage.setItem('products', JSON.stringify(this.productList));
    console.debug('Defailed data store to localStorage');
  }
}
