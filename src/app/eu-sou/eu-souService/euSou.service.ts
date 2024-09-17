import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EuSouService {

  private apiUrl = 'http://localhost:3000/api/dados';

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
      return this.http.get(this.apiUrl);
  }
}

