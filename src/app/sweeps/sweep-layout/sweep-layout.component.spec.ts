import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweepLayoutComponent } from './sweep-layout.component';

describe('SweepLayoutComponent', () => {
  let component: SweepLayoutComponent;
  let fixture: ComponentFixture<SweepLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweepLayoutComponent]
    });
    fixture = TestBed.createComponent(SweepLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
