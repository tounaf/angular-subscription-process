import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAchatDetailComponent } from './list-achat-detail.component';

describe('ListAchatDetailComponent', () => {
  let component: ListAchatDetailComponent;
  let fixture: ComponentFixture<ListAchatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAchatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAchatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
