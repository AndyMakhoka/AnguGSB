import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtatService {
  private ClientUrl: string = "";
  constructor(private httpClient: HttpClient) { }

  getListeEtat(): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/listeEtat';
    return this.httpClient.get(this.ClientUrl);
  }
}
