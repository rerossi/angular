import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component implements OnInit {

  styleCss = '';

  constructor() { }

  ngOnInit(): void {
  }

  mudarCor(cor:string){
    if(cor == 'vermelho'){
    this.styleCss = 'vermelho'
    }else if(cor == 'verde'){
      this.styleCss = 'verde'
    }else if(cor == 'azul'){
      this.styleCss = 'azul'
    }else{
      this.styleCss = ''
    }
  }

}
