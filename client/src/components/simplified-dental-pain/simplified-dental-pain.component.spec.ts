import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedDentalPainComponent } from './simplified-dental-pain.component';

describe('SimplifiedDentalPainComponent', () => {
  let component: SimplifiedDentalPainComponent;
  let fixture: ComponentFixture<SimplifiedDentalPainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifiedDentalPainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplifiedDentalPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
