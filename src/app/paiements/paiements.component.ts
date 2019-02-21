import { Component, OnInit } from '@angular/core';
import { PaiementsService } from '../paiements.service';

@Component({
  selector: 'app-paiements',
  templateUrl: './paiements.component.html',
  styleUrls: ['./paiements.component.css']
})
export class PaiementsComponent implements OnInit {
  paiements = [{
    datePaiement: '',
    montant: '',
    article: '',
    Etat: '',
    Action: ''
  }];

  constructor(private paiementService: PaiementsService) {
    this.getPaiements()
  }

  ngOnInit() {
  }

  getPaiements() {
    this.paiementService.getPaiements().subscribe(data => {
      console.log(data);
      for (let paiement of data){
        this.paiements[0].datePaiement = paiement.payment_date;
        this.paiements[0].Etat = paiement.state;
      }

      console.log(this.paiements);
    })
}

}