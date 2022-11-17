import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import {Fichefrais} from "../metier/fichefrais";

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ListefichefraisComponent },
  {path: 'Listefichefrais', component: ListefichefraisComponent },
  {path: 'modifierFrais', component: ListefichefraisComponent },
  {path: 'ajouterFrais/:id', component: Fichefrais },
  //{path: 'ajouterFrais', component: AjouterfichefraisComponent }
  //{path: 'accueil', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
