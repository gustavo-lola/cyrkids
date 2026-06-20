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
} from "ionicons/icons";

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

  kids: Kid[] = [
    {
      id: "1",
      nome: "Lucas",
      idade: "3 anos",
      foto: "https://i.pravatar.cc/150?img=12",
      statusLabel: "Vacinas em dia",
      statusTipo: "ok",
    },
    {
      id: "2",
      nome: "Beatriz",
      idade: "6 meses",
      foto: "https://i.pravatar.cc/150?img=32",
      statusLabel: "1 Pendência",
      statusTipo: "pendencia",
    },
    {
      id: "3",
      nome: "Kael",
      idade: "12 meses",
      foto: "https://i.pravatar.cc/150?img=33",
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

  constructor() {
    addIcons({ notificationsOutline, medkitOutline, addOutline });
  }

  ngOnInit() {}
}
