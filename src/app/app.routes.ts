import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.page").then((m) => m.HomePage),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.page").then((m) => m.HomePage),
  },
  {
    path: "crianca-perfil",
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
    path: "campanhas",
    loadComponent: () =>
      import("./pages/campanhas/campanhas.page").then((m) => m.CampanhasPage),
  },
];
