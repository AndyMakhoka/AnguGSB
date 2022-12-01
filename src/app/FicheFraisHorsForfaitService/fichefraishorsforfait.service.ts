import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Frais} from "../../metier/frais";
import {Fraisht} from "../../metier/fraisht";

@Injectable({
  providedIn: 'root'
})
export class FichefraishorsforfaitService {

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

  getFicheFraisHF(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/getUnFraishorsforfait/' + id;
    return this.httpClient.get(this.ClientUrl);
  }


  addFraisHF(unFraisht: Fraisht) : Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/addFraisHorsForfait';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFraisht));
  }


  updateFraisHF(unFrais: Fraisht) : Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/updateFicheFraisHF';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFrais));
  }


}
