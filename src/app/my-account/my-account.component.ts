import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { BalanceServiceService } from '../balance-service.service'


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {

  now = moment();
  monneyAvailable: number;

  constructor(private balanceService: BalanceServiceService){
    this.gettingBalance();
  }

  onInit(){
    
  }

  gettingBalance(){
    this.balanceService.getBalance().subscribe( (data:any) => {
      this.monneyAvailable = data.balance;
  })
  }

}
