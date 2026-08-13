// EXERCÍCIO 31 - UNSHIFT E SHIFT

// let tarefas = ["Estudar", "Treinar"];

// 1. Adicione "Tomar café" no início.
// 2. Remova o primeiro elemento.
// 3. Mostre o array final.

// Escreva sua solução abaixo:

let tarefas = ["Estudar", "Treinar"];

tarefas.unshift("Tomar café");
console.log("Após unshift:", tarefas);

const tarefasRemovidas = tarefas.shift();
console.log("Removida:", tarefasRemovidas);
console.log("Após shift:", tarefas)