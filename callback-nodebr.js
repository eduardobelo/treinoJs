usuario = {
    id: 1,
    nome: 'Aladin',
    dataNascimento: new Date()
}

telefone = {
    telefone: '939293129',
    ddd: 32
}

endereco = {
    rua: 'dos bobos',
    numero: 0
}

obterUsuario = async (callback) => {
    setTimeout( () => {
        return callback(null, usuario);
    }, 1000);
}
obterTelefone = async (idUsuario, callback) => {
    setTimeout( () => {
        return callback(null, telefone);
    }, 2000);
}
obterEndereco = async (idUsuario, callback) => {
    setTimeout( () => {
        return callback(null, endereco);
    }, 2000)
}

obterUsuario( (error, usuario) => {
    if (error){
        console.error('Deu ruim em usuário: ', error)
        return;
    }
    obterTelefone(usuario.id, (error1, telefone) => {
        if (error1){
            console.error('Deu ruim em telefone: ', error1)
            return;
        } 
        obterEndereco(usuario.id, (error2, endereco) => {
            if (error2){
                console.error('Deu ruim em endereço: ', error2)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
           `)
        })
    })
})











