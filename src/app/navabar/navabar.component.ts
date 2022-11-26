import { Component, OnInit } from '@angular/core';
import {GlobalComponentComponent} from "../global/global-component.component.";

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {

  public ConnectBar: string = 'se connecter';
  public ConnectLink: string = '/connexion';

  constructor() { }

  ngOnInit(): void {

  }



}
