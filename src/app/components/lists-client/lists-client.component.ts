import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-lists-client',
  templateUrl: './lists-client.component.html',
  styleUrls: ['./lists-client.component.css']
})
export class ListsClientComponent implements OnInit {

  clients : Client[] = [];

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
    this.clientService._getClients()
    .subscribe((client: Client[]) => this.clients=client);
  }


}
