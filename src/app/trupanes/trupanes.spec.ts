import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trupanes } from './trupanes';

describe('Trupanes', () => {
  let component: Trupanes;
  let fixture: ComponentFixture<Trupanes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trupanes],
    }).compileComponents();

    fixture = TestBed.createComponent(Trupanes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
