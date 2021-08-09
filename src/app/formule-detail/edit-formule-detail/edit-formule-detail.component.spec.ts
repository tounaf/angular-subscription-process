import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormuleDetailComponent } from './edit-formule-detail.component';

describe('EditFormuleDetailComponent', () => {
  let component: EditFormuleDetailComponent;
  let fixture: ComponentFixture<EditFormuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormuleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
