import { Injectable } from '@angular/core';
import {Visiteur} from "../../metier/visiteur";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {
  private ClientUrl = "";

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  }


  getLogin(unV: Visiteur): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/getConnexion';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));
}

  getLogout(unV: Visiteur): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/getConnexion';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));
  }

}
