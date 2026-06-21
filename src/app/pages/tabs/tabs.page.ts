import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { homeOutline, megaphoneOutline, peopleOutline } from "ionicons/icons";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, FormsModule],
})
export class TabsPage {
  constructor() {
    addIcons({ homeOutline, peopleOutline, megaphoneOutline });
  }
}
