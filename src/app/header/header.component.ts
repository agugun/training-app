import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  imageUrl: string = '/assets/logo.png';
  @Input() cartItemNo: number;
  @Output() soldItems = new EventEmitter();

  constructor() { 

  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {

  }

  showSoldItems() {
    let value: string = '64'
    alert('send value from header :' + value);
    this.soldItems.emit(value);
  }

}
