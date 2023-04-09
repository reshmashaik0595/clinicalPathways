import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokingCessationComponent } from './smoking-cessation.component';

describe('SmokingCessationComponent', () => {
  let component: SmokingCessationComponent;
  let fixture: ComponentFixture<SmokingCessationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokingCessationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmokingCessationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
