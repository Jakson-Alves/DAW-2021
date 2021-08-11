//declarando função se retorno
function inicio(){
    const variavel = 'Inicio da execução';
    console.log(variavel);
}

const init = function(){
    console.log('inicio aternativo')
}

//função com dois functions params
const processa = (func1, func2) => {
    func1();

    const variavel = 'Executanto processo';
    console.log(variavel)

    func2();
}

//arrow-function
processa(() =>{

}, () => {

});