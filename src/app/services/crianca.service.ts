import { Injectable } from "@angular/core";
import { Crianca } from "../models/crianca.model";

@Injectable({ providedIn: "root" })
export class CriancaService {
  private criancas: Crianca[] = [
    {
      id: "1",
      nome: "Lucas",
      idade: "3 anos",
      foto: "https://api.dicebear.com/7.x/big-smile/svg?seed=Lucas&backgroundColor=ABC270",
      vacinas: [
        {
          id: "v1",
          nome: "BCG",
          descricao: "Previne formas graves de tuberculose.",
          dose: "Dose única",
          faixaEtaria: "Ao Nascer",
          status: "realizada",
          dataRealizacao: "12 Jan 2023",
        },
        {
          id: "v2",
          nome: "Pentavalente",
          descricao: "Difteria, Tétano, Coqueluche, HepB, Hib",
          dose: "3ª dose",
          faixaEtaria: "6 Meses",
          status: "realizada",
          dataRealizacao: "15/06/2024",
        },
      ],
    },
    {
      id: "2",
      nome: "Beatriz",
      idade: "6 meses",
      foto: "https://api.dicebear.com/7.x/big-smile/svg?seed=Beatriz&backgroundColor=FEC868",
      vacinas: [
        {
          id: "v3",
          nome: "Pentavalente",
          descricao: "Difteria, Tétano, Coqueluche, HepB, Hib",
          dose: "3ª dose",
          faixaEtaria: "6 Meses",
          status: "realizada",
          dataRealizacao: "15/06/2024",
        },
        {
          id: "v4",
          nome: "Polio (VOP)",
          descricao: "Paralisia Infantil",
          dose: "3ª dose",
          faixaEtaria: "6 Meses",
          status: "pendente",
        },
        {
          id: "v5",
          nome: "Hepatite B",
          descricao: "Dose ao nascer",
          dose: "Dose única",
          faixaEtaria: "Ao Nascer",
          status: "realizada",
          dataRealizacao: "20/01/2024",
        },
      ],
    },
    {
      id: "3",
      nome: "Kael",
      idade: "12 meses",
      foto: "https://api.dicebear.com/7.x/big-smile/svg?seed=Kalel&backgroundColor=FEC868",
      vacinas: [
        {
          id: "v1",
          nome: "Difteria",
          descricao: "Difteria",
          dose: "1ª dose",
          faixaEtaria: "6 Meses",
          status: "pendente",
          dataRealizacao: "15/06/2024",
        },
        {
          id: "v3",
          nome: "Polio (VOP)",
          descricao: "Paralisia Infantil",
          dose: "1ª dose",
          faixaEtaria: "6 Meses",
          status: "pendente",
          dataRealizacao: "15/06/2024",
        },
        {
          id: "v4",
          nome: "Polio (VOP)",
          descricao: "Paralisia Infantil",
          dose: "2ª dose",
          faixaEtaria: "6 Meses",
          status: "pendente",
          dataRealizacao: "15/06/2024",
        },
        {
          id: "v5",
          nome: "Hepatite B",
          descricao: "Dose ao nascer",
          dose: "Dose única",
          faixaEtaria: "Ao Nascer",
          status: "pendente",
          dataRealizacao: "20/01/2024",
        },
      ],
    },
  ];

  getAll(): Crianca[] {
    return this.criancas;
  }

  getById(id: string): Crianca | undefined {
    return this.criancas.find((c) => c.id === id);
  }
}
