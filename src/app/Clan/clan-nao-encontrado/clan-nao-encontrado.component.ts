import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clan-nao-encontrado',
  templateUrl: './clan-nao-encontrado.component.html',
  styleUrls: ['./clan-nao-encontrado.component.css']
})
export class ClanNaoEncontradoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  

  

  }


  voltar(){

    window.history.back();

  }

}
