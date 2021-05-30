import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    constructor() { }

    // Get all products details via API or any storage
    getAllProductsList() {
        let productList: any;
        const prodList:any = localStorage.getItem('products');
        if( prodList && prodList !== '') {
            productList = {
                code: 200,
                status: "success",
                message: "Get valid product list",
                data: JSON.parse(prodList)
            }
        } else {
            productList = {
                code: 200,
                status: "error",
                message: "Get Invalid/Empty product list",
                data: JSON.parse(prodList)
            }
        }
        return productList;
    }
}