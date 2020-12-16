import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingforSomethingElseComponent } from './lookingfor-something-else.component';

describe('LookingforSomethingElseComponent', () => {
  let component: LookingforSomethingElseComponent;
  let fixture: ComponentFixture<LookingforSomethingElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookingforSomethingElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingforSomethingElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
