import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceServiceService {

  constructor(private http: HttpClient) { }

  getBalance(): Observable<Object>{
    return this.http.get('http://private-7875ce-testtechniquefront.apiary-mock.com/balance')
  }
}
