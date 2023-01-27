const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    let obj ={
        nome:req.query.nome
    };
    
    res.render('home', obj)
});

router.get("/rota2", (req, res) => {
    let obj ={
        mostrar: true,
        grade: ['Gestão Ágil de Projetos de Software', 'Banco de Dados - Não relacional','Interação Humano Computador', 'Técnica de Programação II',
        'Desenvolvimento Web III', 'Álgebra Linear' ]
    };
    
    res.render('home02', obj)
});


router.get("/rota3", (req, res) => {
    let obj ={
        mostrar: true,
        historico: ['Algoritmo e Lógica de Programação', 'Modelagem de Banco de Dados','Banco de Dados – Relacional', 'Estrutura de Dados',
        'Engenharia de Software I e II', 'Álgebra Linear', 'Técnica de Programação I', 'Sistemas Operacionais e Redes de Computadores', 
        'Desenvolvimento Web I', 'Design Digital', 'Matemática para Computação' ]
    };
    
    res.render('home03', obj)
});


module.exports = router;