let numeros = [10, 5, 25, 3, 18];

function encontrarMaiorEMenor(numeros) {
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return "O maior valor é " + maior + " e o menor valor é " + menor + ".";
}

console.log(encontrarMaiorEMenor(numeros));