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


@NgModule({
  declarations: [
    AppComponent,
    ListefichefraisComponent,
    NavabarComponent,
    FichefraisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FichefraisService, HttpClient, FormsModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
