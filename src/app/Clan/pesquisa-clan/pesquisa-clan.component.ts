import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ModalAlertService } from '../../shared/modal-alert.service';

@Component({
  selector: 'app-pesquisa-clan',
  templateUrl: './pesquisa-clan.component.html',
  styleUrls: ['./pesquisa-clan.component.css']
})
export class PesquisaClanComponent implements OnInit {

  constructor(private router: Router, private alertSrv: ModalAlertService) { }

  nomeclan: string;
  queryField = new FormControl();
  @Input() mostrarErro: boolean;

  ngOnInit(): void {


  }


  pesquisar() {
    //atribui valor do campo de pesquisa para a variável value
    let value = this.queryField.value;
    // Compara se a variável não é vazia, remove os espaços e verifica se tem ao menos 3 caracteres para fazer a pesquisa
    if (value && (value = value.trim()) !== '' && value.trim().length > 2) {

      this.router.navigate(['clanpesq', 'clanlista'], { queryParams: { 'name': this.queryField.value } });

    } else {

      this.alertSrv.showAlertDanger('A Pesquisa deve conter ao menos 3 Letras!');

    }
  }

}
