import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private db:AngularFireDatabase) { 
   
  }
  createClient(client: Client) {
//client de firebase
    return this.db.list('client').push({
        
      nom: client.nom ,
      prenom: client.prenom ,
      adresse: client.adresse,
      phone: client.phone ,
     
        })
  }
  getAllClients() : Observable<any>{
  return this.db.list('client').snapshotChanges();
  }

deleteClient(id){
    return this.db.list('client').remove(id);
  }
  
}


  