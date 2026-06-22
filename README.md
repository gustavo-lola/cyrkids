# CyrKids

Plataforma digital de acompanhamento da jornada de vacinação infantil, desenvolvida como desafio técnico para o programa de estágio da **Cyrrus**.

Substitui parte da dependência da carteira física de vacinação, permitindo que pais e responsáveis acompanhem facilmente a situação vacinal de seus filhos, identifiquem pendências e atrasos, e fiquem por dentro de campanhas de vacinação ativas.

## Sobre o desafio

O desafio propunha o desenvolvimento de uma aplicação que permitisse:

- Acompanhamento de crianças (múltiplos filhos por família)
- Informações relacionadas às vacinas (descrição, dose, faixa etária)
- Consulta do histórico vacinal completo
- Exibição de campanhas de vacinação ativas
- Visualização da situação vacinal individual de cada criança (em dia, pendente ou atrasada)

## Stack utilizada

- **[Ionic Framework](https://ionicframework.com/)** (v8) — componentes de UI e experiência mobile-first
- **[Angular](https://angular.dev/)** (v20, Standalone Components) — framework principal
- **[Firebase Firestore](https://firebase.google.com/products/firestore)** — banco de dados NoSQL em tempo real
- **TypeScript** — tipagem estática em toda a aplicação
- **SCSS** — estilização customizada sobre o design system do Ionic

## Arquitetura

### Decisões de produto e organização

O app é dividido em 4 áreas principais, navegáveis por uma tab bar fixa:

| Aba | Função |
|---|---|
| **Home** | Dashboard com resumo da família: campanhas ativas, lista de filhos, próximas vacinas |
| **Kids** | Seletor de criança → perfil detalhado com progresso, filtros e agendamento de vacinas |
| **History** | Seletor de criança → histórico vacinal completo, agrupado por faixa etária, com busca |
| **Campaigns** | Campanhas de vacinação ativas, dicas de saúde e calendário de próximas campanhas |

Cada fluxo de "seletor → detalhe" foi separado em componentes/páginas distintas (ex: `crianca-perfil` e `crianca-perfil-detalhe`), seguindo o princípio de responsabilidade única e evitando telas que misturam contextos diferentes (lista vs. detalhe).

### Modelagem de dados (POO)

```typescript
interface Crianca {
  id: string;
  nome: string;
  idade: string;
  foto: string;
  vacinas: Vacina[];
}

interface Vacina {
  id: string;
  nome: string;
  descricao: string;
  dose: string;
  faixaEtaria: string;
  status: "realizada" | "pendente";
  dataRealizacao?: string;
  dataPrevista?: string;
  local?: string;
}
```

**Decisão de design importante:** o status de "atrasada" **não é armazenado no banco** — é **computado dinamicamente** comparando a `dataPrevista` da vacina com a data atual (`statusComputado()` em `utils/vacina.utils.ts`). Isso evita inconsistência de dados (uma vacina marcada como "pendente" há meses precisa virar "atrasada" automaticamente, sem necessidade de um job/cron para atualizar o banco).

### Estrutura de pastas

src/app/

├── models/          # Interfaces de domínio (Crianca, Vacina, Campanha)

├── services/        # Comunicação com Firestore (CriancaService)

├── utils/           # Funções puras de regra de negócio (statusComputado)

├── data/            # Dados de seed/migração para o Firestore

└── pages/

├── tabs/                        # Container de navegação por abas

├── home/                        # Dashboard da família

├── crianca-perfil/              # Seletor de criança

├── crianca-perfil-detalhe/      # Perfil + histórico + agendamento

├── historico-vacinal/           # Seletor de criança (histórico)

├── historico-vacinal-detalhe/   # Timeline vacinal completa

├── campanhas/                   # Campanhas e avisos

└── adicionar-crianca/           # Formulário de cadastro

### Persistência de dados (diferencial)

Os dados são armazenados no **Cloud Firestore**, com leitura em tempo real via `Observable` (RxJS) — qualquer alteração no banco (ex: agendar uma vacina) reflete automaticamente na interface, sem necessidade de recarregar a página.

```typescript
getAll(): Observable<Crianca[]> {
  const ref = collection(this.firestore, "criancas");
  return collectionData(ref, { idField: "id" }) as Observable<Crianca[]>;
}
```

## Design

Paleta de cores fornecida pelo desafio, aplicada via Ionic Color System (`variables.scss`):

| Cor | Hex | Uso |
|---|---|---|
| Verde | `#ABC270` | Cor primária — status "em dia", ações positivas |
| Amarelo | `#FEC868` | Cor secundária — campanhas, destaques |
| Laranja | `#FDA769` | Cor terciária — pendências, alertas |
| Marrom | `#473C33` | Textos, botões de ação principal |

A aplicação é responsiva, com layout adaptado para mobile, tablet e desktop.

##  Como rodar o projeto

```bash
# Instalar dependências
pnpm install

# Rodar em modo desenvolvimento
ionic serve
```

Acesse `http://localhost:8100`.

### Configuração do Firebase

O projeto usa Firestore como banco de dados. As credenciais ficam em `src/environments/environment.ts`. Para popular o banco com dados de exemplo, acesse a rota `/seed` após rodar o projeto.

## Deploy

Build de produção:

```bash
ionic build --prod
```

Hospedagem planejada via **Firebase Hosting**.

## Funcionalidades implementadas

- [x] Cadastro e listagem de múltiplas crianças por família
- [x] Histórico vacinal completo, agrupado por faixa etária
- [x] Identificação automática de vacinas atrasadas (cálculo por data)
- [x] Agendamento de vacinas (data + local) com persistência em tempo real
- [x] Campanhas de vacinação ativas (carrossel)
- [x] Formulário de cadastro de nova criança
- [x] Integração com Cloud Firestore
- [x] Design responsivo (mobile, tablet, desktop)
- [x] Paleta de cores customizada conforme especificação

##  Autor

Desenvolvido por [Gustavo Lola](https://github.com/gustavo-lola) para o processo seletivo de estágio da **Cyrrus**.
