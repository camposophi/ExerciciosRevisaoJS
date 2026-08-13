// EXERCÍCIO 05 - DESCONTO
// Considere:
//
// let preco = 200;
// let desconto = 20;
//
// Calcule o valor do desconto e o preço final.
// O desconto está em porcentagem.

// Escreva sua solução abaixo:

let preco = 200;
let desconto = 20;


console.log("O valor do desconto é:" + preco * (desconto/100) );
console.log("O valor final é:" + (preco - preco *( desconto /100)));
