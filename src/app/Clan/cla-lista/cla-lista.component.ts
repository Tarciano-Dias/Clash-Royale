import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, empty, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

import { ModalAlertService } from '../../shared/modal-alert.service';
import { ClaServiceService } from './../cla-service.service';
import { Clan } from '../modal/clan';


@Component({
  selector: 'app-cla-lista',
  templateUrl: './cla-lista.component.html',
  styleUrls: ['./cla-lista.component.css']
})
export class ClaListaComponent implements OnInit {

  result$: Observable<Clan[]>;
  error$ = new Subject<boolean>(); //Sempre que for emitido um erro ele vai receber true
  nome: string;


  //cria uma inscriçao para receber o subscribe do route e se desinscrever quando o componente é destruido
  inscricao: Subscription;

  constructor(private srvClans: ClaServiceService, private alertSrv: ModalAlertService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    // Captura o parametro 'nome' passado pelo queryparams na rota
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => { this.nome = queryParams['name'] })


    //atribui o resultado do GET diretamente a um observable para utilizar o async no template (caso retorne erro )
    this.result$ = this.srvClans.getList(this.nome).pipe(map(resp => resp.items),
      catchError(error => {
      this.error$ = error;
        /* console.error('mensagem de erro=> ',error);
        this.error$.next(true); *///captura o erro e atribui ao observable error$ true para retorno ao pipe async que esta no template
        this.modalError();
        return empty()
      }));
  }

  //método que chama o modal de erro
  modalError() {
    this.alertSrv.showAlertDanger('Erro ao Carregar Lista de Clans! Tente novamente mais tarde.');
    this.router.navigate(['clanpesq','naoencontrado']);
  }

  //realiza a desinscrição quando o componente é destruido.
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
