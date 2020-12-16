import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesWithUberComponent } from './countries-with-uber.component';

describe('CountriesWithUberComponent', () => {
  let component: CountriesWithUberComponent;
  let fixture: ComponentFixture<CountriesWithUberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesWithUberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesWithUberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
