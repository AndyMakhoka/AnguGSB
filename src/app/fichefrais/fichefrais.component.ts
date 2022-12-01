import {Component, Injectable, OnInit} from '@angular/core';
import {Frais} from "../../metier/frais";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Etat} from "../../metier/etat";
import {EtatService} from "../EtatService/etat.service";
import {error} from "@angular/compiler-cli/src/transformers/util";


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
  public titre: string = "Modification d'un frais";
  private paramMap!: ParamMap;
  private error: string = '';

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
      this.getFicheFrais(this.fraisId);

    }
    this.getEtat();





  }

  modifier(id: number): void{
    this.unRouteur.navigate(['/modifierFrais/' + id]);
  }





  getFicheFrais(id: number) : void {
    this.unFS.getFicheFrais(id).subscribe(
      (unFrais) => {
        this.unFrais = unFrais;
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


  annuler(): void {
    this.unRouteur.navigate(['/accueil/']);
  }

  valider() : void {
    this.unFS.updateFrais(this.unFrais).subscribe(
      ()=> {;
      },
      (error) => {
        this.error = error.messages;
      }
    );

    if (this.error != '')
      alert("Erreur survenue " + this.error);
    else
      alert("Modifiaction réussie !");
    this.unRouteur.navigate(['/Listefichefrais']);
  }
  fraishorsforfait(id: number) : void {
   this.unRouteur.navigate(['/Listefichehorsforfaitfrais/' + id]);
  }


}

