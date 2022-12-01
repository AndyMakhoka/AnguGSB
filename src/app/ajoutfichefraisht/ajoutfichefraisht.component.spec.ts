import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutfichefraishtComponent } from './ajoutfichefraisht.component';

describe('AjoutfichefraishtComponent', () => {
  let component: AjoutfichefraishtComponent;
  let fixture: ComponentFixture<AjoutfichefraishtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutfichefraishtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutfichefraishtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
