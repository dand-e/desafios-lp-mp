let arrayNumero = [];
let numero = parseInt(prompt('Digite um número: '));
let soma = 0;

/*
do {
  numero = parseInt(prompt('Digite um número: '));
  arrayNumero.push(numero);
} while (numero > 0);
*/
while (numero > 0){
  arrayNumero.push(numero);
  numero = parseInt(prompt('Digite um número: '));
}

for (let i = 0; i < arrayNumero.length ; i ++){
  soma += arrayNumero[i];
  console.log(soma);
  
}
let media = soma/arrayNumero.length;
console.log(`A média é ${media}`);

alert(`${arrayNumero.length} números foram digitados`);
alert(`A média é ${media}`);
alert(`${arrayNumero.length} números foram digitados`);
