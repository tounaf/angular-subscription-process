import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormuleDetailComponent } from './list-formule-detail.component';

describe('ListFormuleDetailComponent', () => {
  let component: ListFormuleDetailComponent;
  let fixture: ComponentFixture<ListFormuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormuleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
