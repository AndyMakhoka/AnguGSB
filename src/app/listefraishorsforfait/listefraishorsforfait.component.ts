import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/frais";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {Fraisht} from "../../metier/fraisht";
import {FichefraishorsforfaitService} from "../FicheFraisHorsForfaitService/fichefraishorsforfait.service";

@Component({
  selector: 'app-listefraishorsforfait',
  templateUrl: './listefraishorsforfait.component.html',
  styleUrls: ['./listefraishorsforfait.component.css']
})
export class ListefraishorsforfaitComponent implements OnInit {

  public mesFraisHorsForfait!: Fraisht[];
  private error: string = "";
  private id: number = 0;
  public titre: string = "";
  private unFrais: Frais = new Frais();
  public montantTotal!: number;
  public idFrais!: number;

  constructor( private unFHTS: FichefraishorsforfaitService, private unRouteur: Router) {
    let httpFeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache'
    });
  }

  ngOnInit(): void {
    let item = localStorage.getItem('id');
    if (item) {
      this.id = Number.parseInt(item);
      this.titre = "Liste des frais du visiteur " + this.id;

      this.getFicheFraisHTListe(Number.parseInt(item));
    }
  }


  getFicheFraisHTListe(id: number) : void {
    this.unFHTS.getFicheFraisHorsForfaitListe(id).subscribe(
      (mesFHT) => {
        this.mesFraisHorsForfait = mesFHT;

        //this.idFrais = this.mesFraisHorsForfait[0].id_frais;
        this.calculMontant();
      },
      (error) => {
        this.error = error.messages;
      }
    )

  }

  calculMontant(): void {

    for (let i = 0; i < this.mesFraisHorsForfait.length; i++){
      let unFHF: Fraisht = this.mesFraisHorsForfait[i];
      this.montantTotal = this.montantTotal + (unFHF.montant_fraishorsforfait * 1.0);
    }
  }




  modifier(id: number): void{
    this.unRouteur.navigate(['/modifierFrais/' + id]);
  }


  supprimer(id: number): void{

  }
  ajouterFraisHorsForfait(){
    this.unRouteur.navigate(['/ajouterFraisHF/' + this.unFrais.id_frais]);

  }

  validerMontantFraisHorsForfait(){

  }

}
