import { TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();
  });

  it('should create the footer', () => {
    const fixture = TestBed.createComponent(Footer);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should render company name', async () => {
    const fixture = TestBed.createComponent(Footer);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Fabrizio Industria');
  });

  it('should render current year', async () => {
    const fixture = TestBed.createComponent(Footer);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(new Date().getFullYear().toString());
  });
});
