function Aplicacao(id, nome, imagem, descricao) {       // Accept name and age in the constructor
    this.id = id || null;
    this.nome  = nome  || null;
    this.imagem  = imagem  || null;
    this.descricao  = descricao  || null;

}

module.exports = Aplicacao;  