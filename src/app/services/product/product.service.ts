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
        console.info('getAllProductsList() ', productList);
        return productList;
    }
    
    // Get a Single Product Details via API or any storage
    getSpecificProductDetails(product_id: number | string) {
        let productDetails: any;
        const allProdList: any = localStorage.getItem('products');

        const jsonData: any = JSON.parse(allProdList);
        let getData: any;
        jsonData.forEach((ele: any) => {
            if (ele.id.toString() === product_id) {
                getData = ele;
                return;
            }
        });
        if (getData) {
            productDetails = {
                code: 200,
                status: "success",
                message: "Get Product Details",
                data: getData
            };
        } else {
            productDetails = {
                code: 200,
                status: "success",
                message: "Invalid Searching Product",
                data: {}
            };
        }

        console.info('getSpecificProductDetails() ', productDetails);
        return productDetails;
    }
}