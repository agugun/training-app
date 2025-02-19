import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-productfb',
  templateUrl: './add-productfb.component.html',
  styleUrls: ['./add-productfb.component.css']
})
export class AddProductfbComponent implements OnInit {

  prodForm: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.prodForm = this.fb.group({
      productName: ["Apple"],
      productPrice: ["", Validators.required], 
      productDescription: ["Testing"], 
      productColor: ["Red"]
    });
  }

  ngOnInit(): void {
  }

  resetValues () {
   this.prodForm.patchValue({
    productName: ""

   });
  }

}
