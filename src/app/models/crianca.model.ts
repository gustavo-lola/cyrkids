import { Vacina } from "./vacina.model";

export interface Crianca {
  id: string;
  nome: string;
  idade: string;
  foto: string;
  vacinas: Vacina[];
}
