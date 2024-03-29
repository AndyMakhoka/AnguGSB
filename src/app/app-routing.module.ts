import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import {Frais} from "../metier/frais";
import {NavabarComponent} from "./navabar/navabar.component";
import {FichefraisComponent} from "./fichefrais/fichefrais.component";
import * as path from "path";
import {ConnexionComponent} from "./connexion/connexion.component";
import {AjoutFicheFraisComponent} from "./ajout-fiche-frais/ajout-fiche-frais.component";
import {ListefraishorsforfaitComponent} from "./listefraishorsforfait/listefraishorsforfait.component";
import {AjoutfichefraishtComponent} from "./ajoutfichefraisht/ajoutfichefraisht.component";
import {FichefraishorsforfaitComponent} from "./fichefraishorsforfait/fichefraishorsforfait.component";

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'Listefichefrais', component: ListefichefraisComponent },
  {path: 'modifierFrais/:id', component: FichefraisComponent },
  //{path: 'ajouterFrais/:id', component: Frais },
  //{path: 'ajouterFrais', component: AjouterfichefraisComponent },
  { path: 'accueil', component: NavabarComponent },
  { path: 'ajouterFrais', component: AjoutFicheFraisComponent },
  { path: 'Listefichehorsforfaitfrais/:id', component: ListefraishorsforfaitComponent },
  { path: 'ajouterFraisHF/:id', component: AjoutfichefraishtComponent },
  {path: 'modifierFraisHF/:id', component: FichefraishorsforfaitComponent }
  //{path: 'supprimer/:id', component: FichefraishorsforfaitComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
