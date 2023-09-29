/* Omit e Pick */
// Eles servem para evitar repetições de interfaces

interface User {
    id: string;
    name: string;
    email: string;
    password: number;
}

/* Omit */
// Ele omit uma propriedade do objeto
const newUser: Omit<User, "id">  = {
    name: "John",
    email: "john@doe.com",
    password: 123456,
};

/* Pick */
// Ele pega apenas as propriedades selecionadas
const newUser2: Pick<User, "email" | "name"> = {
    name: "John2",
    email: "john2@doe.com",
};