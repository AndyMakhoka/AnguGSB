import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Fichefrais} from "../../metier/fichefrais";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class FichefraisService {

  private headers = new Headers({'content-type': 'application/json'});

  private ClientUrl = "";
  //ClientUrl: string;

  private unFrais = new Fichefrais();
  //unFrais: Fichefrais;

  constructor( private _headers:Headers, private httpClient: HttpClient, private _unFrais: Fichefrais) {
    this.headers = _headers;
    this.unFrais = _unFrais;
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  }

  getFicheFraisListe(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/ListeFrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }

}