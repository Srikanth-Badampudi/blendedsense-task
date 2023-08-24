import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesLayoutComponent } from './businesses-layout.component';

describe('BusinessesLayoutComponent', () => {
  let component: BusinessesLayoutComponent;
  let fixture: ComponentFixture<BusinessesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessesLayoutComponent]
    });
    fixture = TestBed.createComponent(BusinessesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
