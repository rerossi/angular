import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games = new Array<Game>();
  curGame?: Game;

  constructor() {

    const zelda = new Game('Zelda', 'um jogo bem legal', 'pc', 2);
    const gow = new Game('Gow', 'top', 'ps4', 1);
    this.games.push(zelda, gow);
  }

  ngOnInit(): void {
  }

  selectGame(game: Game){

    this.curGame = game;
  }

  newGame() {

    this.curGame = new Game('', '', '', 0);

  }

  save(){
    if(this.curGame)
    this.games.push(this.curGame);
    this.curGame = undefined;
  }

  cancel(){

    this.curGame = undefined;
  }

  remove(pos: number){
    this.games.splice(pos, 1);
  }

}
