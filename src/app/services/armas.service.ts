import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArmasService {
  constructor(private http: HttpClient) {}

  getAllArmas(): Observable<any> {
    return this.http.get('https://valorant-api.com/v1/weapons');
  }
}
