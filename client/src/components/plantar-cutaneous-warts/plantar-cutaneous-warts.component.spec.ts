import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantarCutaneousWartsComponent } from './plantar-cutaneous-warts.component';

describe('PlantarCutaneousWartsComponent', () => {
  let component: PlantarCutaneousWartsComponent;
  let fixture: ComponentFixture<PlantarCutaneousWartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantarCutaneousWartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantarCutaneousWartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
