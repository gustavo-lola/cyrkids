import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonAvatar,
  IonButton,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  notificationsOutline,
  arrowForwardOutline,
  sunnyOutline,
  calendarOutline,
  bulbOutline,
  chevronForwardOutline,
} from "ionicons/icons";
import { Campanha, Dica, ProximaCampanha } from "../../models/campanha.model";

@Component({
  selector: "app-campanhas",
  templateUrl: "./campanhas.page.html",
  styleUrls: ["./campanhas.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonAvatar,
    IonButton,
  ],
})
export class CampanhasPage implements OnInit {
  user = {
    nome: "Maria",
    avatar: "https://i.pravatar.cc/150?img=47",
  };

  campanhasAtivas: Campanha[] = [
    {
      id: "1",
      titulo: "Vacinação Multivacinação 2026",
      descricao:
        "Campanha nacional para crianças e adolescentes de 0 a 15 anos. Atualize a caderneta!",
      bgColor: "#ABC270",
      periodo: "Oct 1-15",
    },
    {
      id: "2",
      titulo: "Campanha de Vacinação contra Gripe",
      descricao: "Proteja sua família nesta estação do ano.",
      bgColor: "#FEC868",
      periodo: "Set 1-30",
    },
  ];

  dicas: Dica[] = [
    {
      id: "1",
      titulo: "Importância da Vitamina D",
      resumo:
        "Entenda como a exposição solar controlada auxilia no crescimento ósseo infantil.",
    },
  ];

  proximasCampanhas: ProximaCampanha[] = [
    {
      id: "1",
      titulo: "Semana da Saúde Bucal",
      descricao: "Checkups gratuitos para pré-escolares",
      mes: "NOV",
      dia: "05",
    },
    {
      id: "2",
      titulo: "Campanha Verão Seguro",
      descricao: "Prevenção e hidratação infantil",
      mes: "DEZ",
      dia: "12",
    },
  ];

  constructor() {
    addIcons({
      notificationsOutline,
      arrowForwardOutline,
      sunnyOutline,
      calendarOutline,
      bulbOutline,
      chevronForwardOutline,
    });
  }

  ngOnInit() {}
}
