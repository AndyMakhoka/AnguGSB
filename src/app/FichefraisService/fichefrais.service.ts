import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Frais} from "../../metier/frais";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable()
export class FichefraisService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl = "";
  //ClientUrl: string;

  private unFrais = new Frais();
  //unFrais: Frais;

  constructor(private httpClient: HttpClient) {
    /*
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    })
     */
  }

  getFicheFraisListe(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/listeFrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }

}
