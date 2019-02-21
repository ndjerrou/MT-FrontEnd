import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementsService {

  constructor(private http: HttpClient) { }

  getPaiements(): Observable<Object>{
    return this.http.get('https://private-7875ce-testtechniquefront.apiary-mock.com/payments')
  }
}
