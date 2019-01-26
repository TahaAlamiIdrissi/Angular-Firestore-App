import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Client } from '../client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection : AngularFirestoreCollection;
  //afs: angularFireStore
  constructor(private afs:AngularFirestore) {
    this.clientCollection=afs.collection('clients');
   }

   _getClients(){
    return  this.clientCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
   }
   _storeClient(data){
     //data : data to add
     return this.clientCollection.add(data);
     //adding data clients in Firestore
   }
   
   _deleteClient(id){
     return this.clientCollection.doc(id).delete();
   }
   _toggleStatus(data,id){
     return this.clientCollection.doc(id).update(data);
   }
   _getClient(id){
     return this.clientCollection.doc(id).valueChanges();//get all the object
   }
   updateClient(client){
     return this.clientCollection.doc(client.id).update(client);
   }
}
