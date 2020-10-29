var Aplicacao = require("../models/aplicacao.js");

module.exports = {

    get : (req,res) => {
        var aplicacoes = [];
        aplicacoes.push(new Aplicacao(
            1, 
            'Aplicação externa 1', 
            'https://vertigo.com.br/wp-content/uploads/COMO-ESCOLHER-A-FERRAMENTA-DE-MONITORAMENTO-DE-PERFORMANCE-DE-APLICA%C3%87%C3%83O-CERTA-1200x675.jpg', 
            "Esse é um modelo da apicação externa 1"
        ));
        aplicacoes.push(new Aplicacao(
            2, 
            'Aplicação externa 2', 
            'https://files.caetreinamentos.com.br/blog/wp-content/uploads/2018/05/27212853/195267-voce-ja-sabe-o-que-e-pdca-3.jpg', 
            "Esse é um modelo da apicação externa 2"
        ));
        
        res.status(200).send(aplicacoes);

    }
}