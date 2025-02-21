/**
 * @param {Array<number>} numbers Array of numbers
 * @returns A new array consisting only of even numbers from `numbers`
 */
export function getEvenNumbers(numbers) {
    return numbers.filter(n => n % 2 == 0)
}

/**
 * @param {Array<number>} numbers Array of numbers 
 * @returns A new array consisting of squared elements from `numbers`
 */
export function squareNumbers(numbers) {
    return numbers.map(n => n ** 2)
}

/**
 * @param {Array} items 
 * @param {(item) => bool} hasProperty 
 * @returns A new array consisting only of elements that have a property, represented as a predicate function
 */
export function getItemsWithProperty(items, hasProperty) {
    return items.filter(i => hasProperty(i))
}

/**
 * @param {Array<number>} numbers Array of numbers 
 * @returns A sum of all elements in `numbers`
 */
export function addNumbers(numbers) {
    return numbers.reduce((acc, n) => acc + n)
}

/**
 * @param {(item) => transformed} func Function argument
 * @param {Array} items An array
 * @returns A new array consisting of the results of `func` applied to every element of `items`
 */
export function applyToAll(items, func) {
    return items.map(i => func(i))
}