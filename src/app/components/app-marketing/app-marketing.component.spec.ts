import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMarketingComponent } from './app-marketing.component';

describe('AppMarketingComponent', () => {
  let component: AppMarketingComponent;
  let fixture: ComponentFixture<AppMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
