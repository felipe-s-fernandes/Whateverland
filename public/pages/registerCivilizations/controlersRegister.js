const fs = require("fs");
const { v4: uuid } = require("uuid");
const path = "./dados/usuarios.json";

// Leitura do banco de dados
const dados = JSON.parse(fs.readFileSync(path, "utf-8"));

const listarUsuarios = function(req, res){
    res.send(dados);
    return dados;               
}

const apenasUmUsuario = function (req, res) {
    const idUsuario = Number(req.params.id);
    const dados = JSON.parse(fs.readFileSync(path, "utf-8"));
    const usuario = dados.find((elemento) => elemento.id === idUsuario);
    res.send(usuario);
    return usuario;
}

// Resposta do servidor para o servidor de banco de dados a informação 
const adicionarUsuario = function (req, res) {
    const formulario = req.body;

    // Se entrar nesse IF é porque está errado
    if (typeof(formulario.nome) !== "string") {
        res.status(500).send({error: "Dado informado incorretamente"});
        return;                
    }

    const novoUsuario = {
        id: uuid(),
        nome: formulario.nome,
        regions: formulario.regions,
    }
    
    // Adicionando informação de novo usuário ao banco de dados
    dados.push(novoUsuario);

    try {
        // Enviar para o banco de dados
        fs.writeFileSync(path, JSON.stringify(dados));
    } catch (error) {
        res.status(500).send({error: "Erro na escrita do banco de dados"});
        return;        
    }

    // Resposta ao usuário da requisição realizada
    res.send(novoUsuario);

    return novoUsuario;
}

const editarUsuario = function (req, res) {
    const idUsuario = req.params.id;
    const nome = req.body.nome;
    const regions = req.body.regions;

    const usuario = dados.find((elemento) => elemento.id === idUsuario);

    if (nome !== undefined) {
        usuario.nome = nome;        
    }

    if (regions !== undefined) {
        usuario.regions = regions;        
    }

    // Envia para o banco de dados
    fs.writeFileSync(path, JSON.stringify(dados));

    res.send(usuario);
    
    return usuario;
}

const deletarUsuario = function (req, res) {
    const idUsuario = req.params.id;

    const usuario = dados.find((elemento) => elemento.id === idUsuario);
    const posicaoUsuario = dados.indexOf(usuario);

    dados.splice(posicaoUsuario, 1);

    // Envia para o banco de dados
    fs.writeFileSync(path, JSON.stringify(dados));

    res.send(usuario);

    return usuario;
}
  
module.exports = { listarUsuarios, apenasUmUsuario, adicionarUsuario, editarUsuario, deletarUsuario };