"use strict";
exports.__esModule = true;
/* implemente um algoritmo que leia três números e imprima na tela o produto (multiplicação) dos três números*/
var rs = require("readline-sync");
/*
const n1 = Number(rs.question('Digite o primeiro número'));
const n2 = Number(rs.question('Digite o segundo número'));
const n3 = Number(rs.question('Digite o terceiro número'));

console.log(n1*n2*n3);



const nota1 = Number(rs.question('Digite a primeira nota: '));
const nota2 = Number(rs.question('Digite a primeira nota: '));
const nota3 = Number(rs.question('Digite a primeira nota: '));

let media: number = (nota1*2 + nota2*3 + nota3*5) / 10;

console.log('sua média é ' + media);


const base = Number(rs.question('Digite a base do triangulo: '));
const altura = Number(rs.question('Digite a altura do triangulo: '));

const area: number = (base * altura) / 2

console.log(' a area do triangulo é ' + area);



const celsius  = Number(rs.question('Digite a temperatura em Celsius'));

let converteFarenheit: number = ((celsius * 9) /5) + 32;

let converteKelvin: number = celsius + 273;

console.log('A temperatura em Farenheit é ' + converteFarenheit + ' e a temperatura em Kelvin é ' + converteKelvin)


// exercicio 05

const dia = Number(rs.question('Digite quantas horas voce joga por dia'));
const semana = Number(rs.question('Digite quantos dias voce joga na semana'));

let ano: number = (dia * semana) * 365;

console.log('Você joga ' + ano + ' horas por ano');



//lista 17/02 parte II
//Exercicio 01
//Crie um programa que solicite ao usuário a digitação de um número. Informe então se este número é par ou ímpar.

const numero = Number(rs.question('Digite um numero'));

let parouImpar: number = numero % 2

if(parouImpar == 0){

    console.log('O numero é Par');
}

else{
    console.log('O numero é impar');
}



//Exercicio 02
// Elaborar uma questão de múltipla escolha, de uma disciplina que esteja cursando ou um tema deinteresse, com um enunciado e cinco alternativas,
//sendo uma correta ou incorreta. Escrever um programa que mostra a questão na tela, pede a resposta correta e informa ao usuário se este acertou ou errou

console.log('Qual a capital da Ucrania R:');

const alternativas = String (rs.question('a) Paris b) Londres c) Kiev d) Moscou')).toUpperCase();

if(alternativas == 'c' || alternativas == 'C'){

    console.log('você acertou');
}

else{

    console.log('você errou');
}

*/
//Exercicio 03
//Um ano é bissexto se for divisível por 4 exceto os séculos, que são bissextos se forem múltiplos de 400.Escreva um programa que lê um ano e determina se este é bissexto.
var ano = Number(rs.question('Digite o ano para saber se e Bissexto'));
if (ano % 4 == 0 && ano % 400 == 0 || ano % 100 != 0) {
    console.log('O ano e bissexto');
}
else {
    console.log('O ano não e bissexto');
}
