import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-crianca-perfil',
  templateUrl: './crianca-perfil.page.html',
  styleUrls: ['./crianca-perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CriancaPerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
