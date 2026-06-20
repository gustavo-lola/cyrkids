import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoVacinalPage } from './historico-vacinal.page';

describe('HistoricoVacinalPage', () => {
  let component: HistoricoVacinalPage;
  let fixture: ComponentFixture<HistoricoVacinalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoVacinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
