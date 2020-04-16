import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable, Subject, empty } from 'rxjs';

import { ClaServiceService } from './../cla-service.service';
import { Clan } from '../modal/clan';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-cla-detalhe',
  templateUrl: './cla-detalhe.component.html',
  styleUrls: ['./cla-detalhe.component.css']
})
export class ClaDetalheComponent implements OnInit {

  @Input() tag: string;
  flag:string;
  clan: Clan;
  error$ = new Subject<boolean>();
  //cria uma inscriçao para receer o subscribe do route parametros da rota e se desinscrever quando o componente é destruido
  inscricao: Subscription;
  constructor( private route: ActivatedRoute, private router: Router, private srvClan:ClaServiceService) {
  
    
  }
  
  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe((params: any)=> {this.tag = params['tag'], this.flag = params['flag']});
    // Troca o caracter # pelo %23 para passar o parametro tag corretamente
    this.tag = this.tag.replace("#","%23");
    console.log(this.tag);

   // this.clan$ = this.srvClan.getClan(this.tag).pipe(catchError(error => { console.error(error); return empty();}));
    this.srvClan.getClan(this.tag).subscribe(resp => {
      this.clan = resp
    },error => console.error(error));
    
    console.log('clan recebido',this.clan);
    
    this.srvClan.getflag(this.clan.location.name).subscribe(resp => {this.flag = resp.flag});
    console.log(this.flag);
  }

  voltar(){
    window.history.back();
  }
  ngOnDestroy() {
  this.inscricao.unsubscribe();
}
}
