import { Component, OnInit } from '@angular/core';
import {Visiteur} from "../../metier/visiteur";
import {VisiteurService} from "../VisiteurService/visiteur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public titre : string = 'Connexion';
  public userLogin! : string;
  public userMap : string = 'Entrez votre mot de passe : ';
  public lblLogin : string = 'login :';
  public lblMessage! : string:
  public estCache : boolean = true;
  public unVisiteur! : Visiteur;
  private error : string = '';


  constructor(private unVS: VisiteurService, private router: Router) { }

  ngOnInit(): void {
  }

  valider() : void {
    this.unVisiteur = new Visiteur();
  }

}
