import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './components/index/app.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';

// Services
import { ProductService } from './services/product/product.service';

// components
import { ProductListComponent } from './components/product/product-list/product-list.component';

// Router Module
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: homeChildRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    ProductListComponent
  ],
  imports: [
    BrowserModule,

    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
