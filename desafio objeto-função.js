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

const familiaCompleta = () => {
  for(let membro of familia){
    console.log(`${membro.nome} é de ${membro.signo}, tem ${membro.idade} anos e gosta da cor ${membro.corPreferida}.`);
  };
};

familiaCompleta();