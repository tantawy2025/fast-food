import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesNearMeComponent } from './cities-near-me.component';

describe('CitiesNearMeComponent', () => {
  let component: CitiesNearMeComponent;
  let fixture: ComponentFixture<CitiesNearMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesNearMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesNearMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
