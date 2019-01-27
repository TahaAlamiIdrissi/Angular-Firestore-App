import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/client';
import * as _ from 'lodash';

@Component({
  selector: 'app-lists-client',
  templateUrl: './lists-client.component.html',
  styleUrls: ['./lists-client.component.css']
})
export class ListsClientComponent implements OnInit {

  clients : Client[] = [];
  search = "";
  searchClients : Client[] = []; 

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
    this.clientService._getClients()
    .subscribe((client: Client[]) => this.searchClients=this.clients=client);
  }
  deleteClient(id){
    this.clientService._deleteClient(id)
                      .then((res)=>console.log(res))
                      .catch((err)=>console.log(err));
  }
  toggleStatus(client){
    
    this.clientService._toggleStatus({active : !client.active},client.id)
                .then((resp)=>console.log(resp))
                .catch((err)=>console.error(err));
  }
  searchClient() {
    this.searchClients =
     _.filter(this.clients, (client) => _.includes(client.email, this.search) || _.includes(client.firstName, this.search) || _.includes(client.lastName, this.search))
   }
  
}
