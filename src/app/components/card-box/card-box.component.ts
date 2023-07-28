import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  ngOnInit(): void {
    this.getAccountData();
  }

  constructor (private service: CardsService){

  }

  getAccountData(){
    this.service.getCard().subscribe(data => {
      this.accountData.name = data.name;
      this.accountData.account.agency = data.account.agency;
      this.accountData.account.number = data.account.number;
      this.accountData.card.limit = data.card.limit;
      this.accountData.card.number= data.card.number.split("")[3];
    });
  }

  accountData: AccountDataModel = {
    name: "Otávio",
    account:{
      agency: "0000",
      number: "00.000000-0"
    },
    card:{
      limit: 0,
      number: "0000"
    }
  };

}
