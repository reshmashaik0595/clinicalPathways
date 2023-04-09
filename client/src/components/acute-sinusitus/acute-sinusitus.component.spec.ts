import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuteSinusitusComponent } from './acute-sinusitus.component';

describe('AcuteSinusitusComponent', () => {
  let component: AcuteSinusitusComponent;
  let fixture: ComponentFixture<AcuteSinusitusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuteSinusitusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuteSinusitusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
