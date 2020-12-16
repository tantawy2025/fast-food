import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInFastFoodComponent } from './new-in-fast-food.component';

describe('NewInFastFoodComponent', () => {
  let component: NewInFastFoodComponent;
  let fixture: ComponentFixture<NewInFastFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInFastFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInFastFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
