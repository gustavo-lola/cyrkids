import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
  addDoc,
  updateDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Crianca } from "../models/crianca.model";
import { Vacina } from "../models/vacina.model";

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

  async add(crianca: Omit<Crianca, "id">): Promise<string> {
    const ref = collection(this.firestore, "criancas");
    const docRef = await addDoc(ref, crianca);
    return docRef.id;
  }

  async atualizarVacina(
    criancaId: string,
    vacinaAtualizada: Vacina,
  ): Promise<void> {
    const ref = doc(this.firestore, "criancas", criancaId);
    const crianca = await new Promise<Crianca | undefined>((resolve) => {
      const sub = this.getById(criancaId).subscribe((c) => {
        resolve(c);
        sub.unsubscribe();
      });
    });

    if (!crianca) return;

    const novasVacinas = crianca.vacinas.map((v) =>
      v.id === vacinaAtualizada.id ? vacinaAtualizada : v,
    );

    await updateDoc(ref, { vacinas: novasVacinas });
  }

  async seed(criancas: Crianca[]): Promise<void> {
    for (const c of criancas) {
      const ref = doc(this.firestore, "criancas", c.id);
      await setDoc(ref, c);
    }
  }
}
