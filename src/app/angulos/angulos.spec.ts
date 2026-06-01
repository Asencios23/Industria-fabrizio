import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulos } from './angulos';

describe('Angulos', () => {
  let component: Angulos;
  let fixture: ComponentFixture<Angulos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angulos],
    }).compileComponents();

    fixture = TestBed.createComponent(Angulos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
