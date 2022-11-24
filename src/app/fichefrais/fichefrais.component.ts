import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/frais";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {

  //public mesFrais: Frais = [];
  public mesFrais = [];
  private error: string = "";
  private id: number = 1;
  private titre: string = "";
  private unFrais: Frais = new Frais();

  constructor( private unFS: FichefraisService, private unRouteur: Router) {
    let httpFeaders = new HttpHeaders({
      'Content-type' : 'application/json',
      'Cache-Control' : 'no-cache'
    })
  }

  ngOnInit(): void {
    let item = localStorage.getItem('id');
    this.id = Number.parseInt(item);
    this.titre = "Liste des frais du visiteur " + this.id;
    this.getFicheFraisListe(this.id);
  }



  getFicheFraisListe(id: number) void {
  this.unFrais.getFicheFraisListe().subscribe(
(fichefrais) => {
  this.mesfrais
}
)
