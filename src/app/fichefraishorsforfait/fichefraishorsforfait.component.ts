import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/frais";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Etat} from "../../metier/etat";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {EtatService} from "../EtatService/etat.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Fraisht} from "../../metier/fraisht";
import {FichefraishorsforfaitService} from "../FicheFraisHorsForfaitService/fichefraishorsforfait.service";

@Component({
  selector: 'app-fichefraishorsforfait',
  templateUrl: './fichefraishorsforfait.component.html',
  styleUrls: ['./fichefraishorsforfait.component.css']
})
export class FichefraishorsforfaitComponent implements OnInit {

  //public mesFrais: Frais = [];
  public unFraisHF!: Fraisht;
  //private unFS: FichefraisService = new FichefraisService();
  private  idfrais: number = 0;
  public titre: string = "Modification d'un frais hors forfait";
  private paramMap!: ParamMap;
  private error: string = '';
  private id!: number;

  public mesEtats!: Etat[];

  private ClientUrl: string = "";


  constructor(private unFHF: FichefraishorsforfaitService, private activatedRoute: ActivatedRoute,
              private unRouteur: Router, private httpClient: HttpClient) {
    let httpFeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.paramMap.get('id')){
      // @ts-ignore
      this.idfrais = +this.activatedRoute.snapshot.paramMap.get('id');
      this.getFicheFraisHF(this.idfrais);

    }

  }

  modifier(id: number): void{
    this.unRouteur.navigate(['/modifierFrais/' + id]);
  }





  getFicheFraisHF(id: number) : void {
    this.unFHF.getFicheFraisHF(id).subscribe(
      (unFraisHF) => {
        this.unFraisHF = unFraisHF;
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
    this.unFHF.updateFraisHF(this.unFraisHF).subscribe(
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
    this.unRouteur.navigate(['/Listefichehorsforfaitfrais/' + this.idfrais]);
  }



}
