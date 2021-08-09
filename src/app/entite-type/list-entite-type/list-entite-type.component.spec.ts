import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntiteTypeComponent } from './list-entite-type.component';

describe('ListEntiteTypeComponent', () => {
  let component: ListEntiteTypeComponent;
  let fixture: ComponentFixture<ListEntiteTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEntiteTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEntiteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
