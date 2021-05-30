import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import { Routes, Router} from '@angular/router';

import { ProductListComponent } from '../product/product-list/product-list.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  active: string|any;
  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => {
      this.active = val.url;
    });
  }

  ngOnInit(): void {
  }

  // Logout User
  logOut(){
    localStorage.removeItem('products');
    console.debug('clear localStorage');
  }
}

// Define and export child routes of HomeComponent
export const homeChildRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }, {
    path: 'details/:id',
    component: ProductDetailsComponent
  },
];
