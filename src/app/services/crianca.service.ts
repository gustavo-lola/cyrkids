import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Crianca } from "../models/crianca.model";

@Injectable({ providedIn: "root" })
export class CriancaService {
  constructor(private firestore: Firestore) {}

  getAll(): Observable<Crianca[]> {
    const ref = collection(this.firestore, "criancas");
    return collectionData(ref, { idField: "id" }) as Observable<Crianca[]>;
  }

  getById(id: string): Observable<Crianca | undefined> {
    const ref = doc(this.firestore, "criancas", id);
    return docData(ref, { idField: "id" }) as Observable<Crianca | undefined>;
  }

  async seed(criancas: Crianca[]): Promise<void> {
    for (const c of criancas) {
      const ref = doc(this.firestore, "criancas", c.id);
      await setDoc(ref, c);
    }
  }
}
