let carros = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2014
    },
    {
        marca: "Honda",
        modelo: "Civic",
        ano: 2018
    },
    {
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2020
    },
    {
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 2015
    }
];

for (let i = 0; i < carros.length; i++) {
    if (carros[i].ano > 2015) {
        console.log(
            carros[i].marca + " " +
            carros[i].modelo + " - " +
            carros[i].ano
        );
    }
}