import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import {Frais} from "../metier/frais";
import {NavabarComponent} from "./navabar/navabar.component";
import {FichefraisComponent} from "./fichefrais/fichefrais.component";
import * as path from "path";
import {ConnexionComponent} from "./connexion/connexion.component";
import {AjoutFicheFraisComponent} from "./ajout-fiche-frais/ajout-fiche-frais.component";

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'Listefichefrais', component: ListefichefraisComponent },
  {path: 'modifierFrais/:id', component: FichefraisComponent },
  //{path: 'ajouterFrais/:id', component: Frais },
  //{path: 'ajouterFrais', component: AjouterfichefraisComponent },
  { path: 'accueil', component: NavabarComponent },
  { path: 'ajouterFrais', component: AjoutFicheFraisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
