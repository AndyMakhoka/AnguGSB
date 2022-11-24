import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import {Frais} from "../metier/frais";
import {NavabarComponent} from "./navabar/navabar.component";

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ListefichefraisComponent },
  { path: 'Listefichefrais', component: ListefichefraisComponent },
  //{path: 'modifierFrais/:id', component: ListefichefraisComponent },
 // {path: 'ajouterFrais/:id', component: Frais },
  //{path: 'ajouterFrais', component: AjouterfichefraisComponent }
  { path: 'accueil', component: NavabarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
