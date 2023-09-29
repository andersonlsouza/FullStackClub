/* Melhorando as funções com muitos parâmetros */

function createUser({ id, name, email, password }) {
    return {
        id,
        name,
        email,
        password,
    };
}

// Posso utilizar o auto completo dos paramêtros, mesmo sendo um objeto
createUser({
    id: 1,
    name: "John",
    email: "john@email.com",
    password: "123456"
});