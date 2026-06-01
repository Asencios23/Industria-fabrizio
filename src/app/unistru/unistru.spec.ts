import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unistru } from './unistru';

describe('Unistru', () => {
  let component: Unistru;
  let fixture: ComponentFixture<Unistru>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unistru],
    }).compileComponents();

    fixture = TestBed.createComponent(Unistru);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
