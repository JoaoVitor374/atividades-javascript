let turmas = [
    {
        nomeProfessor: "Carlos",
        alunos: [
            {
                nome: "João",
                nota: 8
            },
            {
                nome: "Maria",
                nota: 6
            },
            {
                nome: "Pedro",
                nota: 9
            }
        ]
    },
    {
        nomeProfessor: "Fernanda",
        alunos: [
            {
                nome: "Ana",
                nota: 5
            },
            {
                nome: "Lucas",
                nota: 7
            },
            {
                nome: "Marcos",
                nota: 4
            }
        ]
    }
];

function ordenarAlunosPorNota(turmas) {
    for (let i = 0; i < turmas.length; i++) {
        turmas[i].alunos.sort(function (alunoA, alunoB) {
            return alunoA.nota - alunoB.nota;
        });
    }
}

function imprimirResultados(turmas) {
    for (let i = 0; i < turmas.length; i++) {
        console.log("Professor: " + turmas[i].nomeProfessor);

        for (let j = 0; j < turmas[i].alunos.length; j++) {
            let aluno = turmas[i].alunos[j];

            if (aluno.nota >= 7) {
                console.log(
                    "Parabéns " + aluno.nome +
                    ", você foi aprovado com a nota " + aluno.nota
                );
            } else {
                console.log(
                    "Não foi dessa vez " + aluno.nome +
                    ", você reprovou com a nota " + aluno.nota
                );
            }
        }

        console.log("");
    }
}

ordenarAlunosPorNota(turmas);
imprimirResultados(turmas);