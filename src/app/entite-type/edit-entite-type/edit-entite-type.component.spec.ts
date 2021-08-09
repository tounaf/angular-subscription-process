import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntiteTypeComponent } from './edit-entite-type.component';

describe('EditEntiteTypeComponent', () => {
  let component: EditEntiteTypeComponent;
  let fixture: ComponentFixture<EditEntiteTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEntiteTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEntiteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
