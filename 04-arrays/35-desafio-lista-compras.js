// EXERCÍCIO 35 - DESAFIO FINAL

let precos = [20, 15, 30, 10, 25];
const preco1 = 20;
const preco2 = 15;
const preco3 = 30;
const preco4 = 10;
const preco5 = 25;

// Faça:
// 1. Percorra o array.
// 2. Mostre cada preço.
// 3. Some todos os preços.
// 4. Mostre o valor total.
// 5. Se o total for maior ou igual a 100,
//    mostre "Compra acima de R$ 100".
//    Caso contrário, mostre "Compra abaixo de R$ 100".
//
// Utilize apenas conceitos estudados na revisão.

// Escreva sua solução abaixo:

console.log(precos);

console.log("Preço 1:", precos[0]);
console.log("Preço 2:", precos[1]);
console.log("Preço 3:", precos[2]);
console.log("Preço 4:", precos[3]);
console.log("Preço 5:", precos[4]);

const valorTotal = preco1 + preco2 + preco3 + preco4 + preco5;
console.log("Valor total", preco1 + preco2 + preco3 + preco4 + preco5);

if(valorTotal >= 100){
    console.log("Compra acima de R$100.")
}else {
    console.log("Compra abaixo de R$100.")
}