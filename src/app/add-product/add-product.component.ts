import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resetValues () {
    this.productName.setValue('')
    this.productPrice.setValue('')
    this.resetDescription();
  }

  resetDescription () {
    this.productDescription.patchValue({
      prodDesc: ""
    });
  }

  productName = new FormControl('Apple');
  productPrice = new FormControl('');

  productDescription = new FormGroup({
    prodDesc: new FormControl('This is desc product'), 
    prodColor: new FormControl('Red')
  });


}
