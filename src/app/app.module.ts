import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from "@angular/forms";
import { NavabarComponent } from './navabar/navabar.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpHandler} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
//import { FichefraisComponent } from './fichefrais/fichefrais.component';
import {FichefraisComponent} from "./fichefrais/fichefrais.component";
import {FichefraisService} from "./FichefraisService/fichefrais.service";
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import {GlobalComponentComponent} from "./global/global-component.component.";
import { AjoutFicheFraisComponent } from './ajout-fiche-frais/ajout-fiche-frais.component';


@NgModule({
  declarations: [
    AppComponent,
    ListefichefraisComponent,
    NavabarComponent,
    FichefraisComponent,
    ConnexionComponent,
    GlobalComponentComponent,
    AjoutFicheFraisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FichefraisService, HttpClient, FormsModule, GlobalComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
