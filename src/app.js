import { addNumbers, getEvenNumbers, getItemsWithProperty, squareNumbers, applyToAll } from "./array-methods.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']

const isShorterThan5 = item => item.length < 5


console.log(`Результат функции getEvenNumbers для ${numbers}: ${getEvenNumbers(numbers)}`)
console.log(`Результат функции squareNumbers для ${numbers}: ${squareNumbers(numbers)}`)
console.log(`Результат функции getItemsWithProperty для ${words}: ${getItemsWithProperty(words, isShorterThan5)}`)
console.log(`Результат функции addNumbers для ${numbers}: ${addNumbers(numbers)}`)

console.log(
    `Результат функции applyToAll для ${words}: ` +
    `${applyToAll(words, (word) => word.toUpperCase())}`
)
