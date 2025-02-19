import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryName: string = "Fruit";
  categoryDesc: string = "";

  onSubmit() {
    console.log(this.categoryName);
    console.log(this.categoryDesc)
  }

}
