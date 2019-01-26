import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(
              private clientService:ClientService,
              private router:Router) { }

  ngOnInit() {
  }

  addClient(form){
    if(form.valid){
      this.clientService._storeClient(form.value)
                        .then(()=>this.router.navigate(['/']))
                        .catch((error)=>console.error(error));
    }else{
      // Swal({
      //   title: 'Form invalid',
      //   text: 'please re-enter your information',
      //   type: 'warning',
      //   showCancelButton: true,
      //   confirmButtonText: 'Continue',
      //   cancelButtonText: 'Cancel'
      // }).then((result) => {
      //   if (result.value) {
      //     Swal(
      //       'Done ! ',
      //     );
      //   } else if (result.dismiss === Swal.DismissReason.cancel) {
      //     Swal(
      //       'Cancelled',
            
      //     );
      //   }
      // });
      alert("Form invalid !")
    }
  }
}
