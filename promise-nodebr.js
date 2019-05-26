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

obterUsuario = async () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            return resolve(usuario);
        }, 1000);
    })
}
obterTelefone = async (idUsuario) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            return resolve(telefone);
        }, 2000);
    })
}
obterEndereco = async (idUsuario) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            return resolve(endereco);
        }, 2200)
    })    
}

obterUsuario().then( (usuario) => {
            return obterTelefone(usuario.id)
                .then( (result) => {
                    return {
                        usuario: {
                            nome: usuario.nome,
                            id: usuario.id
                        },
                        telefone: result
                    }
                })
        })
        .then((resultado) => {
            return obterEndereco(resultado.usuario.id) 
            .then( (result) => {
                return {
                    usuario: resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: result
                }
            })
        })
        .then(function (resultado) {
            console.log(`
                Nome: ${resultado.usuario.nome}
                Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
                Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            `)
        })
        .catch((error) => {
            console.error('DEU RUIM', error)
        });


// const usuarioPromise = obterUsuario()
// // para manipular o sucesso usamos a função .then
// // para manipular erros , usamos o .catch
// // usuario -> telefone -> telefone
// usuarioPromise
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })
//     .then(function (resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function (resultado) {
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function (error) {
//         console.error('DEU RUIM', error)
//     })








