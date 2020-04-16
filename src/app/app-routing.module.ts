import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //redirecionamento quando o caminho esta totalmente vazio
  {path: '', pathMatch: 'full', redirectTo:'clanpesq'},
  //Resolve a rota clanpesq e faz o lazyloading 
  {path:'clanpesq', loadChildren:() => import ('./Clan/clan.module').then(m => m.ClanModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
