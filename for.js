// for(let i = 1000; i>=1; i--){
//   console.log(`i = ${i}`)
// }

const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10]

for(let j=0; j<notas.length; j++){
  console.log(`A nota ${j} é ${notas[j]}`)
}

for(const nota of notas){
  console.log(nota)
}

const refeicoes = {
  manha: 'cuzcuz',
  tarde: 'feijoada',
  noite: 'pizza'
};

for(const chave in refeicoes){
  console.log(`No período da ${chave} a refeição foi ${refeicoes[chave]}`)
}