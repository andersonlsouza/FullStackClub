const numbers = [1, 2, 4, 6, 8];

const sumOfNumbers = numbers.reduce(
    (accumulator, currentNumber) => {
        return accumulator + currentNumber
    },
    0
);

console.log(sumOfNumbers); // Saída: 21