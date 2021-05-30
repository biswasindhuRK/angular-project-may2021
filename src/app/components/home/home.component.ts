import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes ,Router} from '@angular/router';

import { ProductListComponent } from '../product/product-list/product-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  active: string|any;
  constructor(private router: Router) {
    // Detect route changes for active sidebar menu
    this.router.events.subscribe((val: any) => {
      this.routeChanged(val);
    })
  }

  routeChanged(val:any) {
    this.active = val.url;
  }

  ngOnInit(): void {
  }

  // Logout User
  logOut(){
    localStorage.removeItem('userData');
  }
}

 // Define and export child routes of HomeComponent
 export const homeChildRoutes : Routes = [
  {
    path: '',
    component: ProductListComponent
  }
  ];
