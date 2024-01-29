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

  }

  saveNewAmogus(amogus: Amogus): any {

  }

  get(id: any): any {

  }

  update(amogus: Amogus) {
    
  }

  delete(id: any) {
    
  }
}
