import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Clan } from './modal/clan';

@Injectable({
  providedIn: 'root'
})
export class ClaServiceService {

  private readonly consulta = `${environment.API}?name=`;
  private readonly clantag = `${environment.API}`;
  private readonly flagAPI = 'https://restcountries.eu/rest/v2/name/';
  // Cria o header e adiciona o token
  private readonly header = new HttpHeaders({
    'Authorization': environment.TOKEN,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',

  })

  constructor(private http: HttpClient) { }

  //Método que recupera infos do clan
  getClan(tag: string) {

    console.log('Consultando Clan Por = ', tag)
    return this.http.get(this.clantag + tag, { headers: this.header }).pipe(tap(console.log));

  }

// Método que recupera a lista  de clans
  getList(name: string) {

    //CHAMADA AJAX PARA OBTER OS CLANS PELA API
    console.log('Consultando serviço', name)
    //Realiza o GET na API e retorna o resultado (adiciona delay de 1.seg p/ vizualiar spinner)
    return this.http.get<Clan[]>(this.consulta + name + '&limit=50', { headers: this.header }).pipe(delay(1000), tap(console.log));

  }

  getflag(name:String){

    return this.http.get(this.flagAPI+name+'?fields=flag').pipe(delay(1000),tap(console.log));
  }
}
