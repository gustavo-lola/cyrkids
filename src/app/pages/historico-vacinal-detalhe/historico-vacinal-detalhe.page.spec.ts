import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoVacinalDetalhePage } from './historico-vacinal-detalhe.page';

describe('HistoricoVacinalDetalhePage', () => {
  let component: HistoricoVacinalDetalhePage;
  let fixture: ComponentFixture<HistoricoVacinalDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoVacinalDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
