import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../app/services/client.service';
import { Client } from '../../app/model/client';
  

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients =[];
 
  constructor(private clientservice: ClientService) { 
    
    }

  ngOnInit(): void {
    this.clientservice.getAllClients().subscribe((results) => {
      this.getClients(results)
      
    })
    
  }


  getClients(res){
   
    this.clients = [];
 
    res.forEach(element => {
        
     let y = element.payload.toJSON()
    // console.log(y)
     y["id"] = element.key
     this.clients.push(y as Client);
     
    
  })
 // console.log(this.clients)
 

  }
  delete(id){
    this.clientservice.deleteClient(id);
  }

}


