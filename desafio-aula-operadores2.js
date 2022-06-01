let numero = parseFloat(prompt('Digite um número:', 3.14159));
let numero2 = parseFloat(prompt('Digite um número:', 4.20));
let resultado = (numero, numero2) =>{
  if(numero > numero2){
    return `O ${numero} é maior que ${numero2}`;
  } else if (numero == numero2){
    return `Ninguém é maior. O ${numero} é igual ao ${numero2}`;
  } else {
    return `O ${numero2} é maior que ${numero}`;
  }
};

document.getElementsByClassName('numero')[0].innerHTML=numero;
document.getElementsByClassName('numero')[1].innerHTML=numero2;
document.getElementById('resultado').innerHTML=resultado(numero,numero2);
console.log(resultado(numero, numero2));