import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProducsService {

  constructor() { }

  getProductDetails(): Product {
    let prod: Product = {
      product_id: 2, 
      product_name: "apples", 
      product_price: 5.0, 
      product_desc: "An apple is a round fruit with red or green skin and a whitish inside. One variety of apple might be sweet, another sour.", 
      product_url: 'https://images.everydayhealth.com/images/diet-nutrition/apples-101-about-1440x810.jpg?sfvrsn=f86f2644_5'
    };
    return prod;
  }

}
