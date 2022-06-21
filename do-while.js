let soma = 0;
let numero = -1;

do{
  numero = parseInt(prompt('Digite um número: '));
  soma = soma + numero;
  alert('A soma é: ' + soma);
}while (numero !== -1);