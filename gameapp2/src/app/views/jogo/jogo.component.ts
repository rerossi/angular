import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  jogos = new Array<Jogo>();
  jogoAtual?: Jogo;

  constructor(private gameService: JogoService) { }

  ngOnInit(): void {

    this.atualizar();
  }

  atualizar() {

    this.jogos = this.gameService.listar();

  }

  novo(){

    this.jogoAtual = new Jogo()

  }

  salvar(){

    if(this.jogoAtual){
    this.gameService.inserir(this.jogoAtual);
    }

    this.cancelar();
  }

  cancelar(){

    this.jogoAtual = undefined;

  }
}
