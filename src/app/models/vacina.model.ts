export type StatusVacina = "realizada" | "pendente" | "atrasada";

export interface Vacina {
  id: string;
  nome: string;
  descricao: string;
  dose: string;
  faixaEtaria: string;
  status: StatusVacina;
  dataRealizacao?: string;
}
