import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonAvatar,
  IonRadioGroup,
  IonRadio,
  IonRow,
  IonCol,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { arrowBackOutline } from "ionicons/icons";
import { CriancaService } from "../../services/crianca.service";
import { Vacina } from "../../models/vacina.model";

@Component({
  selector: "app-adicionar-crianca",
  templateUrl: "./adicionar-crianca.page.html",
  styleUrls: ["./adicionar-crianca.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonAvatar,
    IonRadioGroup,
    IonRadio,
    IonRow,
    IonCol,
  ],
})
export class AdicionarCriancaPage {
  nome = "";
  quantidade: number | null = null;
  unidade: "meses" | "anos" = "meses";
  salvando = false;

  // Atualizado para remover a opção 'nao_sei'
  vacinasAoNascer: "sim" | "nao" | null = null;

  constructor(
    private router: Router,
    private criancaService: CriancaService,
  ) {
    addIcons({ arrowBackOutline });
  }

  get fotoPreview(): string {
    const seed = this.nome || "novacrianca";
    return `https://api.dicebear.com/7.x/big-smile/svg?seed=${encodeURIComponent(seed)}&backgroundColor=ABC270`;
  }

  get formValido(): boolean {
    return (
      this.nome.trim().length > 0 &&
      !!this.quantidade &&
      this.quantidade > 0 &&
      this.vacinasAoNascer !== null
    );
  }

  gerarVacinasIniciais(): Vacina[] {
    const statusInicial =
      this.vacinasAoNascer === "sim" ? "realizada" : "pendente";

    return [
      {
        id: "v1",
        nome: "BCG",
        faixaEtaria: "Ao Nascer",
        status: statusInicial,
      },
      {
        id: "v2",
        nome: "Hepatite B",
        faixaEtaria: "Ao Nascer",
        status: statusInicial,
      },
    ] as Vacina[];
  }

  async salvar() {
    if (!this.formValido || this.salvando) return;
    this.salvando = true;

    const idade = `${this.quantidade} ${this.unidade}`;
    const vacinasIniciais = this.gerarVacinasIniciais();

    await this.criancaService.add({
      nome: this.nome.trim(),
      idade,
      foto: this.fotoPreview,
      vacinas: vacinasIniciais,
    });

    this.salvando = false;
    this.router.navigate(["/tabs/crianca-perfil"]);
  }

  voltar() {
    this.router.navigate(["/tabs/crianca-perfil"]);
  }
}
