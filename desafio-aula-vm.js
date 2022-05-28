function velocidade (){
  let distancia = document.getElementById("distancia").value;
  let tempo = document.getElementById("tempo").value;
  console.log(distancia);
  console.log(tempo);
  let velocidadeMedia = distancia/tempo; 
  console.log(velocidadeMedia);
  return alert(`A velocidade média é ${velocidadeMedia}`)
}
