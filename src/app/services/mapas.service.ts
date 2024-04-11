import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapasService {
  constructor(private http: HttpClient) {}

  getAllMapas(): Observable<any> {
    return this.http.get('https://valorant-api.com/v1/maps?language=es-ES');
  }
}
