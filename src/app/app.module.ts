import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from "@angular/forms";
import { NavabarComponent } from './navabar/navabar.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { FichefraisComponent } from './fichefrais/fichefrais.component';
import {FichefraisService} from "./FichefraisService/fichefrais.service";

@NgModule({
  declarations: [
    AppComponent,
    ListefichefraisComponent,
    NavabarComponent,
    FichefraisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
