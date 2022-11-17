import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/frais";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {FichefraisComponent} from "../fichefrais/fichefrais.component";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {compareNumbers} from "@angular/compiler-cli/src/version_helpers";


@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  //public mesFrais: Frais = [];
  public mesFrais = [];
  private error: string = "";
  private id: number = 1;
  private titre: string = "";
  private unFrais: Frais = new Frais();
  private unFS : FichefraisService = new FichefraisService(unFrais);

  constructor( private unFS: FichefraisService, private unRouteur: Router) {
    let httpFeaders = new HttpHeaders({
      'Content-type' : 'application/json',
      'Cache-Control' : 'no-cache'
    })
  }

  ngOnInit(): void {
    let item = localStorage.getItem('id');
    this.id = Number.parseInt(item);
    this.titre = 'Liste des frais du visiteur ' + this.id;
    this.getFicheFraisListe(this.id);
  }

    getFicheFraisListe(id: number) void {
    this.unFS.getFicheFraisListe(id).subscribe(
      (fichefrais) => {
        this.mesfrais
}
  )
    }


}
