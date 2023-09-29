// Estrutura atrasada e feia, utilizando vários if

const day = "Segunda-feira";
let dayOfWeek = undefined;

if (day === "Domingo") {
    dayOfWeek = 1;
} else if (day === "Segunda-feira") {
    dayOfWeek = 2;
} else if (day === "Terça-feira") {
    dayOfWeek = 3;
} else if (day === "Quarta-feira") {
    dayOfWeek = 4;
} else if (day === "Quinta-feira") {
    dayOfWeek = 5;
} else if (day === "Sexta-feira") {
    dayOfWeek = 6;
} else if (day === "Sábado") {
    dayOfWeek = 7;
} else {
    dayOfWeek = "Dia inválido";
}

// Código melhorado utilizado maps

const day2 = "Segunda-feira";

const dayOfObject = {
    "Domingo": 1,
    "Segunda-feira": 2,
    "Terça-feira": 3,
    "Quarta-feira": 4,
    "Quinta-feira": 5,
    "Sexta-feira": 6,
    "Sábado": 7
};

let dayOfWeek2 = dayOfObject[day] || -1;