import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abrasaderas } from './abrasaderas';

describe('Abrasaderas', () => {
  let component: Abrasaderas;
  let fixture: ComponentFixture<Abrasaderas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abrasaderas],
    }).compileComponents();

    fixture = TestBed.createComponent(Abrasaderas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
