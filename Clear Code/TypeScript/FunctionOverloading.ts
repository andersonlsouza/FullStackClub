/* Function Overloading */
// Serve para ter diferentes versões de funções e diferentes tipos de parâmetros

function add(a: string, b: string): string;
function add(a: number, b: number): number;

// Realização normal das funções utilizando any
function add(a: any, b: any) {
    return a + b;    
}

// Se os parâmetros das funções forem de acordo com os valores especificados nas declarações de function Overloading, então a tipagem das constantes serão realizados.
const value = add(1, 2); /* O valor do value é um number */
const value2 = add("1", "2"); /* O valor do value2 é uma string */