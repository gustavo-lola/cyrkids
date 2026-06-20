import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  arrowBackOutline,
  notificationsOutline,
  checkmarkCircleOutline,
  timeOutline,
  chevronDownOutline,
  chevronUpOutline,
  documentTextOutline,
  cloudUploadOutline,
} from "ionicons/icons";
import { CriancaService } from "../../services/crianca.service";
import { Crianca } from "../../models/crianca.model";
import { Vacina } from "../../models/vacina.model";

interface GrupoFaixa {
  faixa: string;
  vacinas: Vacina[];
  expandido: boolean;
}

@Component({
  selector: "app-historico-vacinal",
  templateUrl: "./historico-vacinal.page.html",
  styleUrls: ["./historico-vacinal.page.scss"],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonIcon],
})
export class HistoricoVacinalPage implements OnInit {
  crianca?: Crianca;
  grupos: GrupoFaixa[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private criancaService: CriancaService,
  ) {
    addIcons({
      arrowBackOutline,
      notificationsOutline,
      checkmarkCircleOutline,
      timeOutline,
      chevronDownOutline,
      chevronUpOutline,
      documentTextOutline,
      cloudUploadOutline,
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? "2";
    this.crianca = this.criancaService.getById(id);
    this.agruparPorFaixa();
  }

  agruparPorFaixa() {
    if (!this.crianca) return;
    const ordem = [
      "Ao Nascer",
      "2 Meses",
      "4 Meses",
      "6 Meses",
      "9 Meses",
      "12 Meses",
    ];
    const mapa = new Map<string, Vacina[]>();

    for (const v of this.crianca.vacinas) {
      if (!mapa.has(v.faixaEtaria)) mapa.set(v.faixaEtaria, []);
      mapa.get(v.faixaEtaria)!.push(v);
    }

    this.grupos = ordem
      .filter((f) => mapa.has(f))
      .map((f, index) => ({
        faixa: f,
        vacinas: mapa.get(f)!,
        expandido: index === 0,
      }));
  }

  toggleGrupo(grupo: GrupoFaixa) {
    grupo.expandido = !grupo.expandido;
  }

  contagemGrupo(grupo: GrupoFaixa): string {
    const total = grupo.vacinas.length;
    const realizadas = grupo.vacinas.filter(
      (v) => v.status === "realizada",
    ).length;
    return `${realizadas} de ${total} vacinas aplicadas`;
  }

  grupoCompleto(grupo: GrupoFaixa): boolean {
    return grupo.vacinas.every((v) => v.status === "realizada");
  }

  get totalVacinas(): number {
    return this.crianca?.vacinas.length ?? 0;
  }

  get totalRealizadas(): number {
    return (
      this.crianca?.vacinas.filter((v) => v.status === "realizada").length ?? 0
    );
  }

  get percentualCompleto(): number {
    return this.totalVacinas
      ? Math.round((this.totalRealizadas / this.totalVacinas) * 100)
      : 0;
  }

  get proximaVacina(): Vacina | undefined {
    return this.crianca?.vacinas.find((v) => v.status === "pendente");
  }

  voltar() {
    this.router.navigate(["/tabs/home"]);
  }
}
