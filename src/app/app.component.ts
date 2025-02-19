import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  itemNum: number = 10;

  updatedSoldItems(e) {
    alert('received message in app (parent) :' + e);
  }

}
