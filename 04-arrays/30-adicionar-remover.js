// EXERCÍCIO 30 - PUSH E POP

// let animais = ["Gato", "Cachorro", "Coelho"];

// 1. Adicione "Peixe" no final utilizando push().
// 2. Remova o último elemento utilizando pop().
// 3. Mostre o array final.

// Escreva sua solução abaixo:

let animais = ["Gato", "Cachorro", "Coelho"];

animais.push("Peixe");
console.log("Após push", animais);

const animaisRemovidos = animais.pop();
console.log("Removida:", animaisRemovidos);
console.log("Após pop", animais);