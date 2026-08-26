let numeros = [10, 20, 30, 40, 50];

function imprimirDeTrasParaFrente(numeros) {
    for (let i = numeros.length - 1; i >= 0; i--) {
        console.log(numeros[i]);
    }
}

imprimirDeTrasParaFrente(numeros);