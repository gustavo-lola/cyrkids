import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonSearchbar,
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
  lockClosedOutline,
  calendarOutline,
  locationOutline,
  optionsOutline,
  alertCircleOutline,
} from "ionicons/icons";
import { CriancaService } from "../../services/crianca.service";
import { Crianca } from "../../models/crianca.model";
import { Vacina } from "../../models/vacina.model";
import { statusComputado } from "../../utils/vacina.utils";

interface GrupoFaixa {
  faixa: string;
  vacinas: Vacina[];
  expandido: boolean;
}

type StatusGrupo = "completo" | "proximo" | "bloqueado";

@Component({
  selector: "app-historico-vacinal-detalhe",
  templateUrl: "./historico-vacinal-detalhe.page.html",
  styleUrls: ["./historico-vacinal-detalhe.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonSearchbar,
  ],
})
export class HistoricoVacinalDetalhePage implements OnInit {
  crianca?: Crianca;
  grupos: GrupoFaixa[] = [];
  termoBusca = "";

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
      lockClosedOutline,
      calendarOutline,
      locationOutline,
      optionsOutline,
      alertCircleOutline,
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? "";
    this.criancaService.getById(id).subscribe((crianca) => {
      this.crianca = crianca;
      this.agruparPorFaixa();
    });
  }

  statusVacina(vacina: Vacina) {
    return statusComputado(vacina);
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
      (v) => statusComputado(v) === "realizada",
    ).length;
    return `${realizadas} de ${total} vacinas aplicadas`;
  }

  statusGrupo(grupo: GrupoFaixa): StatusGrupo {
    if (grupo.vacinas.every((v) => statusComputado(v) === "realizada"))
      return "completo";
    if (
      grupo.vacinas.some(
        (v) =>
          statusComputado(v) === "pendente" ||
          statusComputado(v) === "atrasada",
      )
    )
      return "proximo";
    return "bloqueado";
  }

  iconeGrupo(grupo: GrupoFaixa): string {
    const status = this.statusGrupo(grupo);
    if (status === "completo") return "checkmark-circle-outline";
    if (status === "proximo") return "time-outline";
    return "lock-closed-outline";
  }

  get totalVacinas(): number {
    return this.crianca?.vacinas.length ?? 0;
  }

  get totalRealizadas(): number {
    return (
      this.crianca?.vacinas.filter((v) => statusComputado(v) === "realizada")
        .length ?? 0
    );
  }

  get percentualCompleto(): number {
    return this.totalVacinas
      ? Math.round((this.totalRealizadas / this.totalVacinas) * 100)
      : 0;
  }

  get proximaVacina(): Vacina | undefined {
    return this.crianca?.vacinas.find(
      (v) => statusComputado(v) !== "realizada",
    );
  }

  voltar() {
    if (this.crianca) {
      this.router.navigate(["/tabs/crianca-perfil-detalhe", this.crianca.id]);
    } else {
      this.router.navigate(["/tabs/crianca-perfil"]);
    }
  }
}
