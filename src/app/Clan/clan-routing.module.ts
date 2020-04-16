import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClanNaoEncontradoComponent } from './clan-nao-encontrado/clan-nao-encontrado.component';
import { PesquisaClanComponent } from './pesquisa-clan/pesquisa-clan.component';
import { ClaDetalheComponent } from './cla-detalhe/cla-detalhe.component';
import { ClaListaComponent } from './cla-lista/cla-lista.component';

const routes: Routes = [
  {path:'',component:PesquisaClanComponent, data:{depth:1}},
  {path:'clanlista', component:ClaListaComponent, data:{depth:2}},
  {path:'naoencontrado',component: ClanNaoEncontradoComponent},
  {path:'clandetalhe/:tag', component:ClaDetalheComponent, data:{depth:3}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClanRoutingModule { }
