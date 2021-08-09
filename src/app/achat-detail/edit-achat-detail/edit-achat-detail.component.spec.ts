import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAchatDetailComponent } from './edit-achat-detail.component';

describe('EditAchatDetailComponent', () => {
  let component: EditAchatDetailComponent;
  let fixture: ComponentFixture<EditAchatDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAchatDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAchatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
