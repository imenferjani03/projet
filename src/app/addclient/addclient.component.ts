import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators }   from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  client : Client;
  constructor(private formBuilder: FormBuilder, 
              private clientservice: ClientService,
              private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
           // la formControl a une valeur initiale '', un tableau de validateurs
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          
          address: ['', Validators.required],
          phone: ['', Validators.required]
         // phone: ['', [Validators.required, Validators.minLength(8)]]
         
      });
  }
/*
 ajouter un getter f comme propriété pratique pour 
faciliter l'accès aux contrôles de formulaire à partir du modèle. 
Ainsi, par exemple, vous pouvez accéder au champ firstName du modèle en utilisant
 f.firstName au lieu de registerForm.controls.firstName
*/
  get f() { return this.registerForm.controls; }

  register() {
      this.submitted = true;

      if (this.registerForm.invalid) {
          return false;
      }
  else {

     this.client = new Client(this.f.firstName.value, 
      this.f.lastName.value,this.f.phone.value,
      this.f.address.value);
    
      this.clientservice.createClient(this.client).then(res =>{
        
        this.router.navigate(['/clients'])
        
      }).catch(error=>{
      console.error(error)
      return error
      });
        
        
    
  }
}
}