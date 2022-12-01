import { Component, OnInit } from '@angular/core';
import {Fraisht} from "../../metier/fraisht";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FichefraishorsforfaitService} from "../FicheFraisHorsForfaitService/fichefraishorsforfait.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-ajoutfichefraisht',
  templateUrl: './ajoutfichefraisht.component.html',
  styleUrls: ['./ajoutfichefraisht.component.css']
})
export class AjoutfichefraishtComponent implements OnInit {

  //public mesFrais: Frais = [];
  public unFraisHF: Fraisht = new Fraisht();
  //private unFS: FichefraisService = new FichefraisService();
  private  fraisid: number = 0;
  public titre: string = "Ajout d'un frais hors forfait";
  private paramMap!: ParamMap;
  private error: string = '';
  private id!: number;

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
      this.fraisid = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      //this.unFraisHF.lib_fraishorsforfait = "Frais hors forfait"
      this.unFraisHF.id_frais = this.fraisid;

    }

  }

  modifier(id: number): void{
    this.unRouteur.navigate(['/modifierFrais/' + id]);
  }






  annuler(): void {
    this.unRouteur.navigate(['/accueil']);
  }

  valider() : void {
    this.unFraisHF.id_frais =  this.fraisid;
    this.unFHF.addFraisHF(this.unFraisHF).subscribe(
      (unFraisHF)=> {
        alert(unFraisHF);
      },
      (error) => {
        this.error = error.messages;
      }
    );

    if (this.error != '')
      alert("Erreur survenue " + this.error);

    else
      alert("Ajout réussie !");
    this.unRouteur.navigate(['/Listefichehorsforfaitfrais/' + this.fraisid]);



  }



}
