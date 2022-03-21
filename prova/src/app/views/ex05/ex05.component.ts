import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  valor1 = 0;
  valor2 = 0;
  resultado = 0;
  calc = '';

  constructor() { }

  ngOnInit(): void {
  }

  soma(){

    if(this.calc == '+')

    this.resultado = this.valor1 + this.valor2;

  }

  subtrai(){

    if(this.calc == '-')
    this.resultado = this.valor1 - this.valor2;

  }

  dividi(){
    if(this.calc == '/')
    this.resultado = this.valor1 / this.valor2;

  }

  multiplica(){
    if(this.calc == 'x')
    this.resultado = this.valor1 * this.valor2;

  }
}
