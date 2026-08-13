// EXERCÍCIO 27 - CONTINUE
// Utilize um for para mostrar os números de 1 até 8.
// Não mostre o número 4.
// Utilize continue.

// Escreva sua solução abaixo:

for (let numero = 1; numero <=8; numero++){
    if(numero === 4){
        continue;  //pula somente a repetição atual
    }

    console.log(numero);
}