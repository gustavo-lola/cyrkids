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
      titulo: "Multivacinação 2024",
      descricao: "Atualize a caderneta de 0 a 15 anos.",
      imagem: "assets/images/campaigns/bcg-vacine.png",
      bgColor: "#ABC270",
    },
  ];

  kids: Kid[] = [
    {
      id: "1",
      nome: "Lucas",
      idade: "3 anos",
      foto: "https://api.dicebear.com/7.x/big-smile/svg?seed=Lucas&backgroundColor=ABC270",
      statusLabel: "Vacinas em dia",
      statusTipo: "ok",
    },
    {
      id: "2",
      nome: "Beatriz",
      idade: "6 meses",
      foto: "https://api.dicebear.com/7.x/big-smile/svg?seed=Beatriz&backgroundColor=FEC868",
      statusLabel: "1 Pendência",
      statusTipo: "pendencia",
    },
    {
      id: "3",
      nome: "Kael",
      idade: "12 meses",
      foto: "https://api.dicebear.com/7.x/big-smile/svg?seed=Kalel&backgroundColor=FEC868",
      statusLabel: "4 Pendências",
      statusTipo: "pendencia",
    },
  ];

  vaccines: NextVacine[] = [
    {
      id: "1",
      nome: "BCG",
      criancaNome: "Beatriz",
      doseLabel: "Dose única",
      prazo: "Amanhã, 15 Jul",
    },
    {
      id: "2",
      nome: "Pentavalente",
      criancaNome: "Lucas",
      doseLabel: "Reforço",
      prazo: "Em 5 dias",
    },
    {
      id: "3",
      nome: "BCG",
      criancaNome: "Kael",
      doseLabel: "Dose única",
      prazo: "Amanhã, 19 Jul",
    },
  ];

  constructor(private router: Router) {
    addIcons({
      notificationsOutline,
      medkitOutline,
      addOutline,
      checkmarkCircleOutline,
      alertCircleOutline,
    });
  }

  irParaPerfil(id: string) {
    this.router.navigate(["/tabs/crianca-perfil", id]);
  }

  ngOnInit() {}
}
