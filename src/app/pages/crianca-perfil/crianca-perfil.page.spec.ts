import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriancaPerfilPage } from './crianca-perfil.page';

describe('CriancaPerfilPage', () => {
  let component: CriancaPerfilPage;
  let fixture: ComponentFixture<CriancaPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriancaPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
