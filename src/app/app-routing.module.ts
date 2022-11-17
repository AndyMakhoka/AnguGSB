import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListefichefraisComponent} from "./listefichefrais/listefichefrais.component";
import {Frais} from "../metier/Frais";

const routes: Routes = [
  { path: '', redirectTo : '/connexion', pathMatch: 'full' },
  { path: 'connexion', component: ListefichefraisComponent },
  {path: 'Listefichefrais', component: ListefichefraisComponent },
  {path: 'modifierFrais', component: ListefichefraisComponent },
  {path: 'ajouterFrais/:id', component: Frais },
  //{path: 'ajouterFrais', component: AjouterfichefraisComponent }
  //{path: 'accueil', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
