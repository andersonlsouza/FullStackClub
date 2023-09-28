/* Formatação de um objeto JSON no console */
// Para melhorar a exibição (endentação) do JSON no console ao invés de mostrar uma simples string

const person = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 20
};

console.log(JSON.stringify(person, null, 4));