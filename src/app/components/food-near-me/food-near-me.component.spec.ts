import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodNearMeComponent } from './food-near-me.component';

describe('FoodNearMeComponent', () => {
  let component: FoodNearMeComponent;
  let fixture: ComponentFixture<FoodNearMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodNearMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodNearMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
