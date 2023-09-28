/* Coalescing Operator */
// Considera falso as operações "", 0, null ou undefined, se for falso o valor da direita é executado

function fetchUserName() {
    return "";
}

const displayName = fetchUserName() || "Guest";

console.log("User Display Name:", displayName);

/* OR Operator */
// Considera falso as operações null ou undefined, se for falso o valor da direita é executado

function fetchUserName2() {
    return null;
}
const displayName2 = fetchUserName2() ?? "Guest";

console.log("User Display Name:", displayName2);

// Para rodar o código basta utilizar o node