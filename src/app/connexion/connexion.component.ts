import { Component, OnInit } from '@angular/core';
import {Visiteur} from "../../metier/visiteur";
import {VisiteurService} from "../VisiteurService/visiteur.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {NavabarComponent} from "../navabar/navabar.component";
import {GlobalComponentComponent} from "../global/global-component.component.";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public titre : string = 'Connexion';
  public userLogin! : string;
  public userMdp! : string;
  public lblmdp : string = 'Entrez votre mot de passe : ';
  public lblLogin : string = 'login :';
  public lblMessage! : string;
  public estCache : boolean = true;
  public unVisiteur !: Visiteur;
  private error : string = '';
  private navabarComponent! :NavabarComponent;
  public id_visiteur : number = 0;


  constructor(private unVS: VisiteurService, private router: Router) {
    let httpFeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control' : 'no-cache'
    })
  }

  ngOnInit(): void {
    let item = localStorage.getItem('id');
    if (item) {
      this.id_visiteur = Number.parseInt(item);
    }
  }

  valider() : void {

    this.unVisiteur = new Visiteur();
    this.unVisiteur.login_visiteur = this.userLogin;
    this.unVisiteur.pwd_visiteur = this.userMdp;
    this.unVisiteur.id_visiteur = 0;
    localStorage.setItem('id', (this.unVisiteur.id_visiteur).toString());
    this.unVS.getLogin(this.unVisiteur).subscribe(
      (visiteur) => {
        this.unVisiteur = visiteur;
        if (this.unVisiteur.id_visiteur != 0) {
          alert("Authentification réussie !!!")
          localStorage.setItem('id', (this.unVisiteur.id_visiteur).toString());
          this.router.navigate(['accueil']);
        } else {
          alert("Erreur d'appel!");
        }
      },

    (error) => {
      this.error = error.messages;
    });

  }
}
