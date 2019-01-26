import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //afs: angularFireStore
  constructor(private afs:AngularFirestore) { }
}
