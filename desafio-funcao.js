const Objeto = (nome, idade) => {
  if (idade > 18){
    return console.log(`${nome} é de maior e tem ${idade} anos.`);
  } else {
    return console.log(`${nome} é de menor e tem ${idade} anos.`);
  }
}

Objeto('Gisele', 17);
Objeto('Amanda', 19);
Objeto('Bea', 18);
Objeto('Carol', 20);