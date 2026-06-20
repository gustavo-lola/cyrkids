import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonAvatar,
  IonFab,
  IonFabButton,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import {
  arrowBackOutline,
  notificationsOutline,
  addOutline,
  ellipsisVertical,
  checkmarkCircleOutline,
  timeOutline,
} from "ionicons/icons";
import { CriancaService } from "../../services/crianca.service";
import { Crianca } from "../../models/crianca.model";

type Filtro = "todas" | "realizadas" | "pendentes";

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
    IonFab,
    IonFabButton,
  ],
})
export class CriancaPerfilPage implements OnInit {
  crianca?: Crianca;
  filtroAtivo: Filtro = "todas";

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
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id") ?? "1";
    this.crianca = this.criancaService.getById(id);
  }

  get realizadas() {
    return (
      this.crianca?.vacinas.filter((v) => v.status === "realizada").length ?? 0
    );
  }

  get pendentes() {
    return (
      this.crianca?.vacinas.filter((v) => v.status === "pendente").length ?? 0
    );
  }

  get atrasadas() {
    return (
      this.crianca?.vacinas.filter((v) => v.status === "atrasada").length ?? 0
    );
  }

  get progresso(): number {
    const total = this.crianca?.vacinas.length ?? 0;
    return total ? Math.round((this.realizadas / total) * 100) : 0;
  }

  get vacinasFiltradas() {
    if (!this.crianca) return [];
    if (this.filtroAtivo === "realizadas")
      return this.crianca.vacinas.filter((v) => v.status === "realizada");
    if (this.filtroAtivo === "pendentes")
      return this.crianca.vacinas.filter((v) => v.status !== "realizada");
    return this.crianca.vacinas;
  }

  setFiltro(filtro: Filtro) {
    this.filtroAtivo = filtro;
  }

  voltar() {
    this.router.navigate(["/tabs/home"]);
  }
}
