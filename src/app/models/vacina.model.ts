export type StatusVacina = "realizada" | "pendente" | "atrasada" | "bloqueada";

export interface Vacina {
  id: string;
  nome: string;
  descricao: string;
  dose: string;
  faixaEtaria: string;
  status: StatusVacina;
  dataRealizacao?: string;
  local?: string;
}
