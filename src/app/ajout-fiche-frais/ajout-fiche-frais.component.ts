import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/frais";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Etat} from "../../metier/etat";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {EtatService} from "../EtatService/etat.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-ajout-fiche-frais',
  templateUrl: './ajout-fiche-frais.component.html',
  styleUrls: ['./ajout-fiche-frais.component.css']
})
export class AjoutFicheFraisComponent implements OnInit {

  //public mesFrais: Frais = [];
  public unFrais: Frais = new Frais;
  //private unFS: FichefraisService = new FichefraisService();
  private  fraisId!: number;
  public titre: string = "Ajout d'un frais";
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

    let item = localStorage.getItem('id');
    if (item) {
      this.unFrais.id_visiteur = Number.parseInt(item);
      this.getEtat();
    }
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
    this.unRouteur.navigate(['/Listefichefrais/']);
  }

  valider() : void {
    this.unFS.addFrais(this.unFrais).subscribe(
      ()=> {
      },
      (error) => {
        this.error = error.messages;
      }
    );

    if (this.error != '')
      alert("Erreur survenue " + this.error);
    else
      alert("Ajout réussie !");
    this.unRouteur.navigate(['/Listefichefrais']);
  }
  fraishorsforfait() : void {
    // this.unRouteur.navigate(['/accueil']);
  }


}
