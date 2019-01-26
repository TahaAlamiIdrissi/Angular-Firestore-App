import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client : Client={
    id:"",
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    balance:0,
    active : false
  }
  constructor(private route:ActivatedRoute,
              private router:Router,
              private clientService:ClientService) { }
  id : "";

  ngOnInit() {
     this.id=this.route.snapshot.params.id;
    this.clientService._getClient(this.id)
                      .subscribe((client:Client)=> this.client=client);
  }

  updateClient(form){
    if(form.valid){
      this.client.id=this.id;
    this.clientService.updateClient(this.client)
                      .then(()=>this.router.navigate(['/']))
                      .catch((err)=>console.error(err));
                    }
                  }
}
