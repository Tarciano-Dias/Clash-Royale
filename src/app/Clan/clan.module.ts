import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaDetalheComponent } from './cla-detalhe/cla-detalhe.component';
import { ClaListaComponent } from './cla-lista/cla-lista.component';
import { ClanRoutingModule } from './clan-routing.module';
import { PesquisaClanComponent } from './pesquisa-clan/pesquisa-clan.component';
import { ClanNaoEncontradoComponent } from './clan-nao-encontrado/clan-nao-encontrado.component';
import { ClaServiceService } from './cla-service.service';


@NgModule({
  declarations: [
    ClaListaComponent,
    ClaDetalheComponent,
    PesquisaClanComponent,
    ClanNaoEncontradoComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClanRoutingModule,
    FormsModule
  ],
  providers: [
    ClaServiceService
  ]
})
export class ClanModule { }
