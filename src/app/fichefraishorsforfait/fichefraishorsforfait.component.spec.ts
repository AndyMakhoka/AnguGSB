import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichefraishorsforfaitComponent } from './fichefraishorsforfait.component';

describe('FichefraishorsforfaitComponent', () => {
  let component: FichefraishorsforfaitComponent;
  let fixture: ComponentFixture<FichefraishorsforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichefraishorsforfaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichefraishorsforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
