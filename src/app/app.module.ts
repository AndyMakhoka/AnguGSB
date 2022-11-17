import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import { NavabarComponent } from './navabar/navabar.component';
import { FichefraisComponent } from './fichefrais/fichefrais.component';

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
