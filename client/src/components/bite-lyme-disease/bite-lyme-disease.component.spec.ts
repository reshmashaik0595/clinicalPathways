import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiteLymeDiseaseComponent } from './bite-lyme-disease.component';

describe('BiteLymeDiseaseComponent', () => {
  let component: BiteLymeDiseaseComponent;
  let fixture: ComponentFixture<BiteLymeDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiteLymeDiseaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiteLymeDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
