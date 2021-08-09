import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntiteComponent } from './edit-entite.component';

describe('EditEntiteComponent', () => {
  let component: EditEntiteComponent;
  let fixture: ComponentFixture<EditEntiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
