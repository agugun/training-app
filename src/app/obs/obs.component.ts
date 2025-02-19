import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  constructor() { 
    console.log('observable example -------');
    const obs = new Observable(
      function subscribe(observer) {
        observer.next('msg1:' + Date.now());
        observer.next('msg2:' + Date.now());
        observer.next('msg3:' + Date.now());
        observer.complete();
      }
    );

    obs.subscribe(
      (x) => console.log('on success s1 received : ' + x), 
      (error) => console.log('on error : ' + error), 
      () => console.log('Complete')
    );

    obs.subscribe(
      (x) => console.log('on success s2 received : ' + x), 
      (error) => console.log('on error : ' + error), 
      () => console.log('Complete')
    );

    obs.subscribe(
      (x) => console.log('on success s3 received : ' + x), 
      (error) => console.log('on error : ' + error), 
      () => console.log('Complete')
    );

    // subject 
    console.log('subject example ---------');
    const subject = new Subject(); // behaviour and replay
    subject.subscribe(
      event => console.log("s1:" + event), 
      error => console.log("error:" + error), 
      () => console.log('complete')
    );
    subject.subscribe(
      event => console.log("s2:" + event), 
      error => console.log("error:" + error), 
      () => console.log('complete')
    );
    subject.next('msg1:' + Date.now());
    subject.next('msg2:' + Date.now());
    subject.next('msg3:' + Date.now());
    subject.complete();

    // replay subject = 
    console.log('replay example ---------');
    const r_subject = new ReplaySubject(5); 
    r_subject.next('msg1:' + Date.now());
    r_subject.next('msg2:' + Date.now());
    r_subject.next('msg3:' + Date.now());

    r_subject.subscribe(
      event => console.log("s1:" + event), 
      error => console.log("error:" + error), 
      () => console.log('complete')
    );
    r_subject.subscribe(
      event => console.log("s2:" + event), 
      error => console.log("error:" + error), 
      () => console.log('complete')
    );
    r_subject.next('msg4:' + Date.now());
    r_subject.next('msg5:' + Date.now());
    r_subject.next('msg6:' + Date.now());

    // behaviour subject = reply subject with parameter (maximum retrive message) 1
    console.log('behavior example ---------');
    const b_subject = new BehaviorSubject('msg:' + Date.now()); 
    b_subject.next('msg1:' + Date.now());
    b_subject.next('msg2:' + Date.now());
    b_subject.next('msg3:' + Date.now());
    b_subject.subscribe(
      event => console.log("s1:" + event), 
      error => console.log("error:" + error), 
      () => console.log('complete')
    );
    b_subject.subscribe(
      event => console.log("s2:" + event), 
      error => console.log("error:" + error), 
      () => console.log('complete')
    );
    b_subject.next('msg4:' + Date.now());
    b_subject.next('msg5:' + Date.now());
    b_subject.next('msg6:' + Date.now());
    
  }

  ngOnInit(): void {
  }

}
