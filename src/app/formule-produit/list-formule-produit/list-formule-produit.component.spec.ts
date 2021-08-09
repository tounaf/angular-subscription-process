import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormuleProduitComponent } from './list-formule-produit.component';

describe('ListFormuleProduitComponent', () => {
  let component: ListFormuleProduitComponent;
  let fixture: ComponentFixture<ListFormuleProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormuleProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormuleProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
