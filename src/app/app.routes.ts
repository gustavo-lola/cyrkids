import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs",
    pathMatch: "full",
  },
  {
    path: "tabs",
    loadComponent: () =>
      import("./pages/tabs/tabs.page").then((m) => m.TabsPage),
    children: [
      {
        path: "home",
        loadComponent: () =>
          import("./pages/home/home.page").then((m) => m.HomePage),
      },
      {
        path: "crianca-perfil/:id",
        loadComponent: () =>
          import("./pages/crianca-perfil/crianca-perfil.page").then(
            (m) => m.CriancaPerfilPage,
          ),
      },
      {
        path: "historico-vacinal",
        loadComponent: () =>
          import("./pages/historico-vacinal/historico-vacinal.page").then(
            (m) => m.HistoricoVacinalPage,
          ),
      },
      {
        path: "historico-vacinal-detalhe/:id",
        loadComponent: () =>
          import("./pages/historico-vacinal-detalhe/historico-vacinal-detalhe.page").then(
            (m) => m.HistoricoVacinalDetalhePage,
          ),
      },
      {
        path: "campanhas",
        loadComponent: () =>
          import("./pages/campanhas/campanhas.page").then(
            (m) => m.CampanhasPage,
          ),
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "historico-vacinal-detalhe",
    loadComponent: () =>
      import("./pages/historico-vacinal-detalhe/historico-vacinal-detalhe.page").then(
        (m) => m.HistoricoVacinalDetalhePage,
      ),
  },
];
