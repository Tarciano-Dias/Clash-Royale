import { Component, OnInit, Input } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  @Input() menssagem: string;
  @Input() tipo: string;


  ngOnInit(): void {
  }

  onClose() {
    //pega a referencia da modal e atribui hide
    this.bsModalRef.hide();

  }

}
