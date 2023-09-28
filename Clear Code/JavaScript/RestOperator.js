/* Rest Operator */
// Ele pega o resto de um objeto

const user = {
    name: "John Doe",
    age: 35,
    email: "johndoe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
    },
};

const { address, ...rest } = user;

console.log(rest);

// Uma outra ideia é utilizar o rest para obter uma lista de objetos sem as outras propriedades com o uso do map

const users = [{
    name: "John Doe",
    age: 35,
    email: "johndoe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
    },
}];

const _users = users.map(({ address, ...rest }) => rest);