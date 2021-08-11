//variavel do tipo array
const vetor = ['banana', 'maçã','pêssego'];
console.log(vetor);

//adiciona um item/elemento ao vetor
vetor.push('abacate');

console.log(vetor);

//Vetor de objetos
const frutas = [
    {nome: 'Banana', paisOrigem: 'Brasil'},
    {nome: 'Maça', paisOrigem: 'Argentina'},
    {nome: 'Pêssego', paisOrigem: 'Chile'}
];
console.log('Vetor original \n', frutas);

//cria uma tabela com os objetos
console.table(frutas);

//Pega um objeto dentro do vetor
console.log('Item 2 do vetor \n', frutas[1]);

//pegando um atributo do objeto do vetor
console.log('Atributo paisOriem do Item 2 do Vetor \n', frutas[1]['paisOrigem']);
console.log('Atributo paisOriem do Item 2 do Vetor \n', frutas[1].paisOrigem);


