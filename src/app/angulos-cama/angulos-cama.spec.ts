import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulosCama } from './angulos-cama';

describe('AngulosCama', () => {
  let component: AngulosCama;
  let fixture: ComponentFixture<AngulosCama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngulosCama],
    }).compileComponents();

    fixture = TestBed.createComponent(AngulosCama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
