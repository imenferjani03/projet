export class Client{
    
    nom: string;
    prenom: string;
    adresse:string;
  phone: any;
    
   
    constructor( nom: string, prenom:string,
      adresse: string,phone: string,) {
       
      
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.phone = phone;
     
  }
  
  }