let nome = prompt('Qual seu nome?', 'Nome');
let numeroInteiro = parseInt(prompt('Qual a sua idade em anos?', 19));
const numeroRealDouble = Math.PI; // 15 casas decimais de precisão
const numeroRealFloat = numeroRealDouble.toPrecision(8); // 7 casas decimais de precisão
let booleano = numeroRealFloat === numeroRealDouble;

console.log(nome);
console.log(numeroInteiro);
console.log(numeroRealDouble);
console.log(numeroRealFloat);
console.log(booleano);

document.getElementById("str").innerHTML=`Um exemplo de string é ${nome} `;
document.getElementsByClassName("int")[0].innerHTML=`Um exemplo de int é ${numeroInteiro} `;
document.getElementsByClassName("dou")[0].innerHTML=`Um exemplo de double é ${numeroRealDouble} `;
document.getElementsByClassName("flo")[0].innerHTML=`Um exemplo de float é ${numeroRealFloat} `;
document.getElementsByClassName("boo")[0].innerHTML=`Um exemplo de boolean é ${numeroRealFloat} é igual a ${numeroRealDouble}? ${booleano} `;
