import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormuleProduitComponent } from './edit-formule-produit.component';

describe('EditFormuleProduitComponent', () => {
  let component: EditFormuleProduitComponent;
  let fixture: ComponentFixture<EditFormuleProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormuleProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormuleProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
