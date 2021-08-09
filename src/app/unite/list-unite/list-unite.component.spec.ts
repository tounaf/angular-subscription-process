import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUniteComponent } from './list-unite.component';

describe('ListUniteComponent', () => {
  let component: ListUniteComponent;
  let fixture: ComponentFixture<ListUniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
