//Burlando o switch case

const idade = 5;

switch(true){
  case (idade >= 5 && idade <= 7):
    console.log('Você é infantil A');
    break;
  case (idade >= 8 && idade <= 11):
    console.log('Você é infantil B');
    break;
  case (idade >= 12 && idade <= 13):
    console.log('Você é juvenil A');
    break;
  case (idade >= 14 && idade <= 17):
    console.log('Você é juvenil B')
    break;
  default:
    console.log('Você não pode competir');
    break;
}