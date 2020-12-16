import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayOfferComponent } from './today-offer.component';

describe('TodayOfferComponent', () => {
  let component: TodayOfferComponent;
  let fixture: ComponentFixture<TodayOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
