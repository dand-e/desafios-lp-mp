let frase = prompt('Digite uma frase:', 'Olá, sou a frase');
let frase2 = prompt('Digite outra frase:', 'Olá, sou a frase');
let resultado =`A primeira frase é igual a segunda? ${frase == frase2}`

console.log(resultado);

document.getElementById('frase').innerHTML+=frase;
document.getElementById('frase2').innerHTML+=frase2;
document.getElementById('resultado').innerHTML+=resultado;