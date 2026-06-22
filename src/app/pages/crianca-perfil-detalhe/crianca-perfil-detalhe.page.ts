import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonModal,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  arrowBackOutline,
  notificationsOutline,
  addOutline,
  ellipsisVertical,
  checkmarkCircleOutline,
  timeOutline,
  warningOutline,
  calendarOutline,
  lockClosedOutline,
  alertCircleOutline,
} from "ionicons/icons";
import { CriancaService } from "../../services/crianca.service";
import { Crianca } from "../../models/crianca.model";
import { Vacina } from "../../models/vacina.model";
import { statusComputado } from "../../utils/vacina.utils";

type Filtro = "todas" | "realizadas" | "pendentes";

@Component({
  selector: "app-crianca-perfil-detalhe",
  templateUrl: "./crianca-perfil-detalhe.page.html",
  styleUrls: ["./crianca-perfil-detalhe.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonAvatar,
    IonFab,
    IonFabButton,
    IonModal,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  ],
})
export class CriancaPerfilDetalhePage implements OnInit {
  crianca?: Crianca;
  filtroAtivo: Filtro = "todas";

  modalAgendamentoAberto = false;
  vacinaSelecionada?: Vacina;
  dataAgendamento = "";
  localAgendamento = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private criancaService: CriancaService,
  ) {
    addIcons({
      arrowBackOutline,
      notificationsOutline,
      addOutline,
      ellipsisVertical,
      checkmarkCircleOutline,
      timeOutline,
      warningOutline,
      calendarOutline,
      lockClosedOutline,
      alertCircleOutline,
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? "1";
    this.criancaService.getById(id).subscribe((crianca) => {
      this.crianca = crianca;
    });
  }

  get realizadas() {
    return (
      this.crianca?.vacinas.filter((v) => statusComputado(v) === "realizada")
        .length ?? 0
    );
  }

  get pendentes() {
    return (
      this.crianca?.vacinas.filter((v) => statusComputado(v) === "pendente")
        .length ?? 0
    );
  }

  get atrasadas() {
    return (
      this.crianca?.vacinas.filter((v) => statusComputado(v) === "atrasada")
        .length ?? 0
    );
  }

  statusVacina(vacina: Vacina) {
    return statusComputado(vacina);
  }

  get progresso(): number {
    const total = this.crianca?.vacinas.length ?? 0;
    return total ? Math.round((this.realizadas / total) * 100) : 0;
  }

  get vacinasFiltradas() {
    if (!this.crianca) return [];
    if (this.filtroAtivo === "realizadas")
      return this.crianca.vacinas.filter(
        (v) => statusComputado(v) === "realizada",
      );
    if (this.filtroAtivo === "pendentes")
      return this.crianca.vacinas.filter(
        (v) => statusComputado(v) !== "realizada",
      );
    return this.crianca.vacinas;
  }

  setFiltro(filtro: Filtro) {
    this.filtroAtivo = filtro;
  }

  verHistorico() {
    if (this.crianca) {
      this.router.navigate([
        "/tabs/historico-vacinal-detalhe",
        this.crianca.id,
      ]);
    }
  }

  voltar() {
    this.router.navigate(["/tabs/crianca-perfil"]);
  }

  agendarVacina(vacina: Vacina) {
    this.vacinaSelecionada = vacina;
    this.dataAgendamento = vacina.dataPrevista ?? "";
    this.localAgendamento = vacina.local ?? "";
    this.modalAgendamentoAberto = true;
  }

  fecharModal() {
    this.modalAgendamentoAberto = false;
    this.vacinaSelecionada = undefined;
  }

  async salvarAgendamento() {
    if (!this.vacinaSelecionada || !this.crianca) return;

    const vacinaAtualizada: Vacina = {
      ...this.vacinaSelecionada,
      dataPrevista: this.dataAgendamento,
      local: this.localAgendamento,
    };

    await this.criancaService.atualizarVacina(
      this.crianca.id,
      vacinaAtualizada,
    );

    this.fecharModal();
  }
}
