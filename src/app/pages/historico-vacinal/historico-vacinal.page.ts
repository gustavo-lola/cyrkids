import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonAvatar,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { notificationsOutline, chevronForwardOutline } from "ionicons/icons";
import { CriancaService } from "../../services/crianca.service";
import { Crianca } from "../../models/crianca.model";

@Component({
  selector: "app-historico-vacinal",
  templateUrl: "./historico-vacinal.page.html",
  styleUrls: ["./historico-vacinal.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonAvatar,
  ],
})
export class HistoricoVacinalPage implements OnInit {
  todasCriancas: Crianca[] = [];

  constructor(
    private router: Router,
    private criancaService: CriancaService,
  ) {
    addIcons({ notificationsOutline, chevronForwardOutline });
  }

  ngOnInit() {
    this.criancaService.getAll().subscribe((criancas) => {
      this.todasCriancas = criancas;
    });
  }

  selecionarCrianca(id: string) {
    this.router.navigate(["/tabs/historico-vacinal-detalhe", id]);
  }
}
