export interface Campanha {
  id: string;
  titulo: string;
  descricao: string;
  imagem?: string;
  bgColor: string;
  periodo?: string;
}

export interface Dica {
  id: string;
  titulo: string;
  resumo: string;
}

export interface ProximaCampanha {
  id: string;
  titulo: string;
  descricao: string;
  mes: string;
  dia: string;
}
