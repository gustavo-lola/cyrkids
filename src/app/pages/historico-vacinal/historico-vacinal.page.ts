import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-historico-vacinal',
  templateUrl: './historico-vacinal.page.html',
  styleUrls: ['./historico-vacinal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoricoVacinalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
