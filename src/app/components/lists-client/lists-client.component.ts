import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-lists-client',
  templateUrl: './lists-client.component.html',
  styleUrls: ['./lists-client.component.css']
})
export class ListsClientComponent implements OnInit {

  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(){
    this.clientService._getClients()
    .subscribe(res => console.log(res));
  }


}
