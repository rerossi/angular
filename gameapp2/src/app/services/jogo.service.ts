import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

 private jogos = new Array<Jogo>();

 private idGerado = 1;

  constructor() { }

  inserir(jogo: Jogo){

    jogo.id = this.idGerado;
    this.jogos.push(jogo);
    this.idGerado++;

  }

  listar(){

    return this.jogos;

  }
}
