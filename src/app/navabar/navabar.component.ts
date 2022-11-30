import { Component, OnInit } from '@angular/core';
import {GlobalComponentComponent} from "../global/global-component.component.";

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {

  public id_visiteur: number = 0;

  public ConnectBar: string = 'se connecter';
  public ConnectLink: string = '/connexion';

  constructor() { }

  ngOnInit(): void {
    let item = localStorage.getItem('id');
    if (item) {
      this.id_visiteur = Number.parseInt(item);
      this.ConnectBar = 'se déconnecter';
      //this.ConnectLink = '/logout';
    }
  }



}
