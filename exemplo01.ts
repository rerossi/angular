
import * as rs from 'readline-sync';
/*
let message: string = 'Hello World';
console.log(message);

let n: number;
n = 0;

const flag = true;

let qualquerCoisa: any;
*/

const nome: string = rs.question('Digite seu nome: ');
console.log('Olá ' + nome);

const idade = Number(rs.question('Digite sua idade: '));