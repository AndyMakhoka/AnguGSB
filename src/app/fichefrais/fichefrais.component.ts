import {Component, Injectable, OnInit} from '@angular/core';
import {Frais} from "../../metier/frais";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Etat} from "../../metier/etat";
import {EtatService} from "../EtatService/etat.service";


@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {

  //public mesFrais: Frais = [];
  public unFrais: Frais = new Frais;
  //private unFS: FichefraisService = new FichefraisService();
  private  fraisId: number = 0;
  private titre: string = "Modification d'un frais";
  private paramMap!: ParamMap;
  private error: string = '';

  private unEtat: Etat = new Etat;
  public mesEtats!: Etat[];

  private ClientUrl: string = "";


  constructor(private unFS: FichefraisService, private activatedRoute: ActivatedRoute,private unES: EtatService,
              private unRouteur: Router, private httpClient: HttpClient) {
    let httpFeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.paramMap.get('id')){
      // @ts-ignore
      this.fraisId = +this.activatedRoute.snapshot.paramMap.get('id');
      this.unFS.getFicheFrais(this.fraisId);
    }
    this.getFicheFrais(1);
    this.getEtat();


  }

  modifier(id: number): void{
    this.unRouteur.navigate(['/modifierFrais/' + id]);
  }
  supprimer(id: number): void{
    this.unRouteur.navigate(['/suprimer/' + id]);
  }



  getFicheFrais(id: number) : void {
    this.unFS.getFicheFraisListe(id).subscribe(
      (fichefrais) => {
        this.unFrais = fichefrais;
      },
      (error) => {
        this.error = error.messages;
      }
    )

  }

  getEtat(): void {
    this.unES.getListeEtat().subscribe(
      (mesEtats) =>{
        this.mesEtats = mesEtats;
      },
      (error) => {
        this.error = error.messages;
      }
    )
  }


  annuler(id: number): void{
    this.unRouteur.navigate(['/accueil/']);
  }



}

