import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { bellOutline } from "ionicons/icons";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonAvatar,
    IonLabel,
    IonIcon,
    IonButton,
    IonBadge,
  ],
})
export class HomePage implements OnInit {
  user = {
    name: "Maria",
    avatar: "https://i.pravatar.cc/150?img=147",
  };

  kids = [
    {
      name: "",
      avatar: "",
    },
    {
      name: "",
      avatar: "",
    },
    {
      name: "",
      avatar: "",
    },
    {
      name: "",
      avatar: "",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
