import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from './alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalAlertService {

  constructor(private modalService: BsModalService) { }

  tipo:string;
  
  private showAlert(mensagem:string, tipo:string){

  const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
  bsModalRef.content.tipo = tipo;
  bsModalRef.content.menssagem = mensagem;

  }

  showAlertDanger(mensagem: string){
    this.tipo='danger';
    this.showAlert(mensagem,this.tipo);

  }

}