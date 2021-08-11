//você consegue utilizar o var antes mesmo de declarar, nao tem como matar o var depois de declarar
const exibeMensagemVar = () => {
    var msgForaIF = 'Brasil';

    if (true) {
        var msgDentroIF = 'Argentina'
        console.log(msgDentroIF);
    
    }

    console.log(msgForaIF);
    console.log(msgDentroIF);

}

exibeMensagemVar();

//let garante que 
const exibeMensagemLet = () => {
    let msgForaIF = 'Brasil';

    if (true) {
        let msgDentroIF = 'Argentina'
        console.log(msgDentroIF);
    
    }

    console.log(msgForaIF);
    console.log(msgDentroIF);

}

exibeMensagemLet();