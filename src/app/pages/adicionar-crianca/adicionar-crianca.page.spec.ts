import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarCriancaPage } from './adicionar-crianca.page';

describe('AdicionarCriancaPage', () => {
  let component: AdicionarCriancaPage;
  let fixture: ComponentFixture<AdicionarCriancaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
