import { Component, OnInit } from '@angular/core';
import {Fichefrais} from "../../metier/fichefrais";

@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  //public mesFrais: Fichefrais[];
  public mesFrais = new Fichefrais();
  constructor() { }

  ngOnInit(): void {
  }

}
