let numeroAnalisado = parseFloat(prompt('Digite um número', 4.20));
let numeroAnalisado2 = parseFloat(prompt('Digite outro número', 4.20));
let resultado = numeroAnalisado + numeroAnalisado2;

if ( resultado > 100 ){
  console.log(`${resultado} é maior que 100`);
  document.getElementsByClassName('res')[0].innerHTML=`${resultado} é maior que 100`;
} else if (resultado === 100){
  console.log(`Bingo! Deu 100!`)
  document.getElementsByClassName('res')[1].innerHTML=`Bingo! Deu 100!`;
} else {
  console.log(`${resultado} é menor que 10`);
  document.getElementsByClassName('res')[2].innerHTML=`${resultado} é menor que 100`;
}