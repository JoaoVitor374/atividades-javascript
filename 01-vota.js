let nome = "João";
let idade = 19;

function podeVotar(nome, idade) {
    if (idade >= 16) {
        console.log(nome + ", você poderá votar este ano.");
    } else {
        console.log(nome + ", você não poderá votar este ano.");
    }
}

podeVotar(nome, idade);