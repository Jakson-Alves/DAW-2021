//declarando função se retorno
function inicio(){
    const variavel = 'Inicio da execução';
    console.log(variavel);
}

const init = function(){
    console.log('inicio aternativo')
}

//função com dois functions params
function processa(func1, func2){
    func1();

    const variavel = 'Executanto processo';
    console.log(variavel)

    func2();
}

//função sem retorno
function fim(){
    const variavel = 'Finalizando execução do processo';
    console.log(variavel);
}


processa(inicio, fim)
processa(init, fim)

processa(function(){
    console.log('Funcao init')
}, function(){
    console.log('Funcao end')
})