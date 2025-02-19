import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductfbComponent } from './add-productfb.component';

describe('AddProductfbComponent', () => {
  let component: AddProductfbComponent;
  let fixture: ComponentFixture<AddProductfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductfbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
