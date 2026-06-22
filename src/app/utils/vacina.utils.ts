import { Vacina } from "../models/vacina.model";

export type StatusComputado =
  | "realizada"
  | "pendente"
  | "atrasada"
  | "bloqueada";

export function statusComputado(vacina: Vacina): StatusComputado {
  if (vacina.status === "realizada") return "realizada";
  if (vacina.status === "bloqueada") return "bloqueada";

  if (vacina.dataPrevista) {
    const hoje = new Date();
    const prevista = new Date(vacina.dataPrevista);
    if (prevista < hoje) return "atrasada";
  }

  return "pendente";
}
