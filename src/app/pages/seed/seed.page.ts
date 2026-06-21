import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonContent, IonButton } from "@ionic/angular/standalone";
import { CriancaService } from "../../services/crianca.service";
import { CRIANCAS_MOCK } from "../../data/criancas-mock";

@Component({
  selector: "app-seed",
  template: `
    <ion-content class="ion-padding">
      <ion-button (click)="rodarSeed()">Popular Firestore</ion-button>
      <p>{{ status }}</p>
    </ion-content>
  `,
  standalone: true,
  imports: [CommonModule, IonContent, IonButton],
})
export class SeedPage {
  status = "";

  constructor(private criancaService: CriancaService) {}

  async rodarSeed() {
    this.status = "Enviando...";
    await this.criancaService.seed(CRIANCAS_MOCK);
    this.status = "Concluído! Dados migrados pro Firestore.";
  }
}
