import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionProcessComponent } from './subscription-process.component';

describe('SubscriptionProcessComponent', () => {
  let component: SubscriptionProcessComponent;
  let fixture: ComponentFixture<SubscriptionProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
