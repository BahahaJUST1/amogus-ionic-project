import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Amogus } from './models/amogus.model';

@Injectable({
  providedIn: 'root'
})
export class AmogusService {

  private dbPath = '/amogus'
  amogusRef: AngularFirestoreCollection<Amogus>;

  constructor(private db: AngularFirestore) { 
    this.amogusRef = db.collection(this.dbPath);
  }

  getAll(): any {
    return this.amogusRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewAmogus(amogus: Amogus): any {
    return new Observable(obs => {
      this.amogusRef.add({...amogus}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {

  }

  update(amogus: Amogus) {
    
  }

  delete(id: any) {
    
  }
}
