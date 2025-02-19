import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contentarea',
  templateUrl: './contentarea.component.html',
  styleUrls: ['./contentarea.component.css']
})
export class ContentareaComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  constructor() { 
    // console.log('constructor')
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy')
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges')
  }
  ngOnInit(): void {
    // console.log('ngOnInit')
  }

}
