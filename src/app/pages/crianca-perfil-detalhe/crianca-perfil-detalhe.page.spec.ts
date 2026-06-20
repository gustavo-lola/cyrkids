import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriancaPerfilDetalhePage } from './crianca-perfil-detalhe.page';

describe('CriancaPerfilDetalhePage', () => {
  let component: CriancaPerfilDetalhePage;
  let fixture: ComponentFixture<CriancaPerfilDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriancaPerfilDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
