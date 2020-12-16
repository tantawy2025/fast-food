import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InANushComponent } from './in-a-nush.component';

describe('InANushComponent', () => {
  let component: InANushComponent;
  let fixture: ComponentFixture<InANushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InANushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InANushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
