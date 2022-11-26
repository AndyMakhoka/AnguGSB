import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global-component.component.html',
  styleUrls: ['./global-component.component.css']
})
export class GlobalComponentComponent implements OnInit {

  public ConnectBar: string = 'se connecter';
  public ConnectLink: string = '/connexion';

  constructor() { }

  ngOnInit(): void {
    this.ConnectChek();
  }

  ConnectChek() : void {
    if (localStorage.getItem('id')){
      this.ConnectLink = '/connexion';
      this.ConnectBar = 'Se connecter';
    }else {
      this.ConnectLink = '/logout';
      this.ConnectBar = 'Se Déconnecter';
    }
  }

}
