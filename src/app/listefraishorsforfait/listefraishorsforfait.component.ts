import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/frais";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  public unFrais: Frais = new Frais();
  public idfrais: number = 0;
  public montantTotal: any = 0.00;

  constructor( private unFHTS: FichefraishorsforfaitService, private unRouteur: Router, private activatedRoute: ActivatedRoute, private unFS: FichefraisService) {
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

      if (this.activatedRoute.snapshot.paramMap.get('id')){
        // @ts-ignore
        this.idfrais = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getFicheFraisHTListe(this.idfrais);

      }
      //this.unFraisHF.lib_fraishorsforfait = "Frais hors forfait"
      //this.unFraisHF.id_frais = this.idfrais;

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

    let unFHF!: Fraisht;

    for (let i = 0; i < this.mesFraisHorsForfait.length; i++){
      unFHF = this.mesFraisHorsForfait[i];
      this.montantTotal = this.montantTotal + (unFHF.montant_fraishorsforfait * 1.0);

    }
  }




  modifier(id: number): void{
    this.unRouteur.navigate(['/modifierFraisHF/' + id]);
  }


  supprimer(unFHF: Fraisht): void{
    //this.unRouteur.navigate(['/ajouterFraisHF/' + id]);
    this.unFHTS.deleteFraisHF(unFHF).subscribe(
      () => {

        //this.idFrais = this.mesFraisHorsForfait[0].id_frais;

      },
      (error) => {
        this.error = error.messages;
      }
    )
    //this.unRouteur.navigate(['/Listefichehorsforfaitfrais/' + unFHF.id_frais]);
    location.reload();
  }
  ajouterFraisHorsForfait(){
    this.unRouteur.navigate(['/ajouterFraisHF/' + this.idfrais]);

  }

  validerMontantFraisHorsForfait(){

    this.unFrais.id_frais = this.idfrais;
    this.unFrais.montantHF = this.montantTotal;

    this.unFS.ValidateMontantFrais(this.unFrais).subscribe(
      () => {
        this.unRouteur.navigate(['/Listefichefrais']);
      },
      (error) => {
        this.error = error.messages;
        alert(this.unFrais.id_frais);
        alert(this.unFrais.montantHF);
      }
    )
  }

}
