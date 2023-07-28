import { Component } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent {
  ngOnInit(): void {
    this.getAmountValues();
  }

  constructor (private service: AccountsService){

  }

  getAmountValues(){
    this.service.getCard().subscribe(data => {
      this.accountDetails.amountValue = data.account.balance;
      this.accountDetails.limit = data.account.limit;
      this.accountDetails.totalAmount = 
        this.accountDetails.amountValue + this.accountDetails.limit;
    });
  }

  accountDetails: AmountDataModel = {
    amountValue: 0,
    limit:0,
    totalAmount: 0,    
  }

}
