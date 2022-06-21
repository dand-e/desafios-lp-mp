const familia = [
  { nome: 'Xangô' ,
    idade: 60,
    corPreferida: 'vermelho',
    signo: 'Áries'
  },
  { nome: 'Nanã' ,
    idade: 80,
    corPreferida: 'roxo',
    signo: 'Libra'
  },
  { nome: 'Oxumarê' ,
    idade: 30,
    corPreferida: 'arco-íris',
    signo: 'Câncer'
  } 
]

//For of
const familiaCompleta = () => {
  for(let membro of familia){
    console.log(`${membro.nome} é de ${membro.signo}, tem ${membro.idade} anos e gosta da cor ${membro.corPreferida}.`);
  };
};

familiaCompleta();

//For of e for in
const familiaCompleta2 = () => {
  for(const membro of familia){
    for(let info in membro){
      console.log(`${familia.indexOf(membro)+1} - ${info}: ${membro[info]}`);
    };
  };
};

familiaCompleta2();

//For of entries()
for (membro of familia.entries()){
  console.log(membro)
}


