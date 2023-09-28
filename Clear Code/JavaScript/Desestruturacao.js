/* Desestruturação Básica */

const pessoa = { nome: 'João', idade: 30 };

const { nome, idade } = pessoa;

console.log(nome); // Saída: João
console.log(idade); // Saída: 30

/* Desestruturação com Atribuição de Nomes Diferentes */

const pessoa2 = { nome: 'Maria', idade: 25 };

const { nome: nomeDaPessoa2, idade: idadeDaPessoa2 } = pessoa2;

console.log(nomeDaPessoa2); // Saída: Maria
console.log(idadeDaPessoa2); // Saída: 25

/* Desestruturação com Valores Padrão */

const pessoa3 = { nome3: 'Carlos' };

// Desestruturação com valores padrão
const { nome3, idade3 = 30 } = pessoa3;

console.log(nome3); // Saída: Carlos
console.log(idade3); // Saída: 30 (valor padrão)

/* Desestruturação de Propriedades Internas */

const pessoa4 = {
    nome4: 'Alice',
    endereco4: {
        rua4: 'Rua Principal',
        cidade4: 'Cidade Exemplo',
    },
};
const { nome4, endereco: { rua4, cidade4 } } = pessoa;

console.log(nome4); // Saída: Alice
console.log(rua4);  // Saída: Rua Principal
console.log(cidade4); // Saída: Cidade Exemplo

/* Desestruturação com Valores Padrão para Propriedades Internas */

const pessoa5 = {
    nome5: 'Bob',
    endereco5: {
        rua5: 'Rua Secundária',
    },
};

const { nome5, endereco5: { rua5 = 'N/A', cidade5 = 'N/A' } } = pessoa;

console.log(nome5); // Saída: Bob
console.log(rua5);  // Saída: Rua Secundária (valor existente)
console.log(cidade5); // Saída: N/A (valor padrão)

/* Desestruturação de objeto com muitas Propriedades Internas */

const pessoa6 = {
    nome6: 'Eva',
    endereco6: {
        rua6: 'Rua Principal',
        cidade6: 'Cidade Exemplo',
        informacoes: {
            cep: '12345-678',
            pais: 'Brasil',
        },
    },
};

// Desestruturação de propriedades netas
const { nome6, endereco6: { rua6, cidade6, informacoes: { cep, pais } } } = pessoa;

console.log(nome6); // Saída: Eva
console.log(rua6); // Saída: Rua Principal
console.log(cidade6); // Saída: Cidade Exemplo
console.log(cep); // Saída: 12345-678
console.log(pais); // Saída: Brasil