let produto = {
    nome: "Teclado",
    preco: 150,
    estoque: 20
};

for (let propriedade in produto) {
    console.log(propriedade + ": " + produto[propriedade]);
}
