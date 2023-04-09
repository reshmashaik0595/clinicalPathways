import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrownToenailComponent } from './ingrown-toenail.component';

describe('IngrownToenailComponent', () => {
  let component: IngrownToenailComponent;
  let fixture: ComponentFixture<IngrownToenailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrownToenailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngrownToenailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
