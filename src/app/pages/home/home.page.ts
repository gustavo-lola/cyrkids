import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  bellOutline,
  medkitOutline,
  notificationsOutline,
} from "ionicons/icons";
import { NextObserver } from "rxjs";

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
  ],
})
export class HomePage implements OnInit {
  user = {
    name: "Maria",
    avatar: "https://i.pravatar.cc/150?img=147",
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
      foto: "https://i.pravatar.cc/150?img=32",
      statusLabel: "4 Pendência",
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
    addIcons({ bellOutline, notificationsOutline, medkitOutline });
  }

  ngOnInit() {}
}
