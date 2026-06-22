import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonToolbar,
  IonFab,
  IonFabButton,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  medkitOutline,
  notificationsOutline,
  addOutline,
  checkmarkCircleOutline,
  alertCircleOutline,
} from "ionicons/icons";
import { Router } from "@angular/router";
import { CriancaService } from "../../services/crianca.service";
import { Crianca } from "../../models/crianca.model";

interface Kid {
  id: string;
  nome: string;
  idade: string;
  foto: string;
  statusLabel: string;
  statusTipo: "ok" | "pendencia";
}

interface NextVacine {
  id: string;
  nome: string;
  criancaNome: string;
  doseLabel: string;
  prazo: string;
}

interface Campaign {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  bgColor: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonAvatar,
    IonLabel,
    IonIcon,
    IonButton,
    IonBadge,
    IonFab,
    IonFabButton,
  ],
})
export class HomePage implements OnInit {
  user = {
    name: "Maria",
    avatar: "https://i.pravatar.cc/150?img=47",
  };

  campaigns: Campaign[] = [
    {
      id: "1",
      titulo: "Campanha de Vacinação contra Gripe",
      descricao: "Proteja sua família nesta estação.",
      imagem: "assets/images/campaigns/vacina-gripe.png",
      bgColor: "#FEC868",
    },
    {
      id: "2",
      titulo: "Multivacinação 2026",
      descricao: "Atualize a caderneta de 0 a 15 anos.",
      imagem: "assets/images/campaigns/bcg-vacine.png",
      bgColor: "#ABC270",
    },
  ];

  kids: Kid[] = [];
  vaccines: NextVacine[] = [];

  constructor(
    private router: Router,
    private criancaService: CriancaService,
  ) {
    addIcons({
      notificationsOutline,
      medkitOutline,
      addOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
    });
  }

  ngOnInit() {
    this.criancaService.getAll().subscribe((criancas) => {
      this.kids = this.montarKids(criancas);
      this.vaccines = this.montarProximasVacinas(criancas);
    });
  }

  private montarKids(criancas: Crianca[]): Kid[] {
    return criancas.map((c) => {
      const pendentes = c.vacinas.filter(
        (v) => v.status !== "realizada",
      ).length;
      return {
        id: c.id,
        nome: c.nome,
        idade: c.idade,
        foto: c.foto,
        statusLabel:
          pendentes === 0
            ? "Vacinas em dia"
            : `${pendentes} Pendência${pendentes > 1 ? "s" : ""}`,
        statusTipo: pendentes === 0 ? "ok" : "pendencia",
      };
    });
  }

  private montarProximasVacinas(criancas: Crianca[]): NextVacine[] {
    const proximas: NextVacine[] = [];
    for (const c of criancas) {
      const pendente = c.vacinas.find((v) => v.status === "pendente");
      if (pendente) {
        proximas.push({
          id: pendente.id,
          nome: pendente.nome,
          criancaNome: c.nome,
          doseLabel: pendente.dose,
          prazo: "Em breve",
        });
      }
    }
    return proximas;
  }

  irParaPerfil(id: string) {
    this.router.navigate(["/tabs/crianca-perfil-detalhe", id]);
  }

  irParaAdicionar() {
    this.router.navigate(["/tabs/adicionar-crianca"]);
  }
}
