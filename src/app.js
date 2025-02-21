import { addNumbers, getEvenNumbers, getItemsWithProperty, squareNumbers, applyToAll } from "./array-methods.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']

const isShorterThan5 = item => item.length < 5

// задание 1
console.log("Задание 1")
console.log(`Результат функции getEvenNumbers для ${numbers}: ${getEvenNumbers(numbers)}`)
console.log(`Результат функции squareNumbers для ${numbers}: ${squareNumbers(numbers)}`)
console.log(`Результат функции getItemsWithProperty для ${words}: ${getItemsWithProperty(words, isShorterThan5)}`)
console.log(`Результат функции addNumbers для ${numbers}: ${addNumbers(numbers)}`)
console.log()

// задание 2
console.log("Задание 2")
console.log(
    `Результат функции applyToAll для ${words}: ` +
    `${applyToAll(words, (word) => word.toUpperCase())}`
)
console.log()

// задание 3
console.log("Задание 3")
let evenNumbers = getEvenNumbers(numbers)
let squaredEvenNumbers = squareNumbers(evenNumbers)
let sumOfSquares = addNumbers(squaredEvenNumbers)
console.log(`Сумма квадратов чисел ${evenNumbers}: ${sumOfSquares}`)

let lessThan7 = getItemsWithProperty(numbers, (n) => n < 7)
let average = addNumbers(
    applyToAll(lessThan7, (n) => n / lessThan7.length)
)
console.log(`Среднее арифметическое чисел ${lessThan7}: ${average}`)