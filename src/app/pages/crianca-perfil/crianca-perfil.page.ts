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
  selector: "app-crianca-perfil",
  templateUrl: "./crianca-perfil.page.html",
  styleUrls: ["./crianca-perfil.page.scss"],
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
export class CriancaPerfilPage implements OnInit {
  todasCriancas: Crianca[] = [];

  constructor(
    private router: Router,
    private criancaService: CriancaService,
  ) {
    addIcons({ notificationsOutline, chevronForwardOutline });
  }

  ngOnInit() {
    this.todasCriancas = this.criancaService.getAll();
  }

  selecionarCrianca(id: string) {
    this.router.navigate(["/tabs/crianca-perfil-detalhe", id]);
  }
}
