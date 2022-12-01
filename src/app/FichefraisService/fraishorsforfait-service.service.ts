import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FraishorsforfaitServiceService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl!: string;

  constructor(private httpClient: HttpClient) {

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

  }


  getFicheFraisHorsForfaitListe(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/getListeHorsForfait/' + id;
    return this.httpClient.get(this.ClientUrl);
  }
}
