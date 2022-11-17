import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/Frais";

@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  //public mesFrais: Frais[];
  public mesFrais = new Frais();
  constructor() { }

  ngOnInit(): void {
  }

}
