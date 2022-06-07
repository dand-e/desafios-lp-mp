const marcaCarros = ['Ford', 'Hyundai', 'Fiat', 'BMW', 'Etios'];

marcaCarros.push('Honda');
marcaCarros[6] = 'Tiggo';
marcaCarros[marcaCarros.length] = 'LisCar';
marcaCarros.push('Dodger'); //adiciona item a posição final
marcaCarros.sort(); //ordena em forma alfabetica e em ordem crescente
console.log(marcaCarros);
var removido = marcaCarros.pop(); //remove item da posição final
console.log(removido);
marcaCarros.shift(); //remove o primeiro item da array
marcaCarros.unshift('Jeep'); //adiciona item a primeira posição da array
marcaCarros.splice(1, 0, 'BMW+', 'Tiggo+'); //a partir da posição 1 adiciona um item, removendo 0 itens e o valor da adição
console.log(marcaCarros);
