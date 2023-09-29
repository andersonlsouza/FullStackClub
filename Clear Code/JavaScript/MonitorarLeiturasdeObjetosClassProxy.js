/* Class Proxy */
// Ela serve para monitorar os dados das propriedades dos objetos

// Transformando os dados da propriedade person.name com letras maiusculas
const person = {
    age: 20,
    name: "john"
};

const p = new Proxy(person, {
    get(target, key) {
        if (key === "name") {
            return target[key].toUpperCase();
        }

        return target[key];
    }
});

console.log(p.name); //Saída: JOHN

// Validando alterações no objeto que não admite valor negativo e setando um error caso o valor para a propriedade não seja o esperado

const person2 = {
    name: "John",
    age: 20,
};

const p2 = new Proxy(person2, {
    set(target, key, value) {
        if (key === "age" && value < 0) {
            throw new Error("Idade precisa ser positiva!");
        }

        target[key] = value;
    },
});