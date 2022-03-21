import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  img = 'assets/Brasil.png';
  img2 = 'assets/Canda.png';

  constructor() { }

  ngOnInit(): void {
  }

mostraImg(){

  if(this.img == 'assets/Brasil.png'){

    this.img = 'assets/Canada.png';
  }

  else{
    this.img = 'assets/Brasil.png';
  }
}

}
