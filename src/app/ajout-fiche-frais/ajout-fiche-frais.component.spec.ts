import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFicheFraisComponent } from './ajout-fiche-frais.component';

describe('AjoutFicheFraisComponent', () => {
  let component: AjoutFicheFraisComponent;
  let fixture: ComponentFixture<AjoutFicheFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFicheFraisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutFicheFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
