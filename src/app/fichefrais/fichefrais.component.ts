import { Component, OnInit } from '@angular/core';
import {Frais} from "../../metier/frais";
import {FichefraisService} from "../FichefraisService/fichefrais.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {

  //public mesFrais: Frais = [];


  constructor(private unFS: FichefraisService, private unRouteur: Router) {
    let httpFeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    })
  }

  ngOnInit(): void {

  }

}

