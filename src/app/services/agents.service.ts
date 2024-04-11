import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  constructor(private http: HttpClient) {}

  getAllAgents(): Observable<any> {
    return this.http.get(
      'https://valorant-api.com/v1/agents?language=es-ES&isPlayableCharacter=true'
    );
  }
}
